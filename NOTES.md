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
4. Install the npm package concurrently to run multiple scripts at the same time.

5. Comparison of strings

  ```javascript
    "X" > "a" // => false

    "X".charCodeAt(0) // => 88
    "a".charCodeAt(0) // => 97

    88 > 97 // => false
  ```
6. Union Types (or operator)

  Only access properties that are common means existent in both types.

7. How type guards work

  Narrow type of a value to a primitive type

    typeof --> number | string | boolean | symbol

  Narrow down everry other type of value

    instanceof --> Every other value that is created with a constructor function
  
8. **Abstract Classes**

  - Can't be used to create an object directly.
  - Only used as parent class.
  - Can contain real implementation for some methods.
  - The implemented methods can refer to other methods that don't actually exist yet (we stil have to provide names andd types for the un-implemented methods).
  - Can make child classes promise to implement some other method.
