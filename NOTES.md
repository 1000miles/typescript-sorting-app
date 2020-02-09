# Notes

1. To prevent a messy project structure separate the typescript-files from the compiled files by creating `src/` and `build/` directories on the same file system level.

2. `tsc --init` to create a `tsconfig.json` file.

3. Once the source dir and build dir are set in `tsconfig.json` with

  ```json
    "outDir": "./build",
    "rootDir": "./src",
  ```

use folling cli-command:

  ```shell
  $ tsc # Compile all files
  $ tsc -w # Watch input files for changes
  ```
