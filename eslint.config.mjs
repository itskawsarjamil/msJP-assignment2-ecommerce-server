import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier'
export default tseslint.config(
    prettier,
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        // files: ["src/**/*.ts"],
        files: ["**/*.{js,mjs,cjs,ts}"], // Specify file extensions to lint
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
                "process": "readonly",
            }
        },
        rules: {
            "no-unused-vars": "error",
            "no-unused-expressions": "error",
            "prefer-const": "error",
            "no-console": "warn",
            "no-undef": "error"
        }
    },
    {
        ignores: ["**/node_modules/", "**/dist/"]

        //         Use Pattern 1(** /node_modules/, ** /dist/): If you want to ensure that node_modules and dist directories are ignored no matter where they appear in your project hierarchy.This is useful for larger projects with complex directory structures.


        // ignores:["node_modules/**","dist/**"]

        // Use Pattern 2(node_modules/**, dist/**): If you only need to ignore node_modules and dist directories located at the root level of your project.
    }
);