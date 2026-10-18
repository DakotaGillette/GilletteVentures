import { defineAction, ActionError } from "astro:actions";
import { z } from "astro/zod";
import { Resend } from "resend";
import {
  RESEND_API_KEY,
  TURNSTILE_SECRET_KEY,
  CONTACT_TO,
  CONTACT_FROM,
} from "astro:env/server";
import { site } from "../config/site";

async function verifyTurnstile(token: string, ip: string | null) {
  if (!TURNSTILE_SECRET_KEY) return true; // not configured yet; allow in dev
  const body = new FormData();
  body.append("secret", TURNSTILE_SECRET_KEY);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  const data = (await res.json()) as { success: boolean };
  return data.success;
}

export const server = {
  contact: defineAction({
    accept: "form",
    input: z.object({
      // An empty form field arrives as null, so the type message is set too.
      name: z.string("Enter your name").min(1, "Enter your name").max(100),
      email: z.email("Enter a valid email address"),
      message: z
        .string("Tell us what you need")
        .min(10, "Tell us a little more")
        .max(5000, "That is too long. Please shorten it."),
      /** Honeypot. Real people leave it empty; the handler checks it. */
      company: z.string().optional(),
      "cf-turnstile-response": z.string().optional(),
    }),
    handler: async (input, ctx) => {
      if (input.company) return { ok: true }; // bot: accept silently

      const ip = ctx.request.headers.get("CF-Connecting-IP");
      const passed = await verifyTurnstile(input["cf-turnstile-response"] ?? "", ip);
      if (!passed) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Could not verify that you are human. Reload the page and try again.",
        });
      }

      if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "The contact form is not configured yet.",
        });
      }

      const resend = new Resend(RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: CONTACT_FROM,
        to: CONTACT_TO,
        replyTo: input.email,
        subject: `${site.name}: message from ${input.name}`,
        text: `From: ${input.name} <${input.email}>\n\n${input.message}`,
      });

      if (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Could not send your message. Please call us instead.",
        });
      }

      return { ok: true };
    },
  }),
};
