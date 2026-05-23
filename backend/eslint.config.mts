import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
     {
          files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node }, rules: {
               "indent": ["error", 5],
               "quotes": ["error", "double"],
               "semi": ["error", "always"]
          }
     },
     tseslint.configs.recommended,
     { files: ["**/*.json"], ignores: ["package-lock.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
]);
