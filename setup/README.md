# setup/

Files that cannot be shipped at their final path.

## vscode/

VSCode cannot receive `.vscode/` files through the tooling that maintains this
template, so they live here. During project setup they are moved into place:

    New-Item -ItemType Directory -Force .vscode
    Move-Item setup\vscode\*.json .vscode\
    Remove-Item setup -Recurse

After that, F5 starts the dev server and opens a browser. Delete this folder once
the move is done; nothing references it.
