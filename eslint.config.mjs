import { defineConfig } from "eslint/config"
import * as emotion from "@emotion/eslint-plugin"
import react from "eslint-plugin-react"
import globals from "globals"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"

const __filename = fileURLToPath(import.meta.url)

export default defineConfig([
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    plugins: {
      "@emotion": emotion,
      react,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },

      ecmaVersion: 2018,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "@emotion/pkg-renaming": "error",

      "react/no-unknown-property": [
        "error",
        {
          ignore: ["css"],
        },
      ],
    },
  },
])
