import global from "globals";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import tsParser from "@typescript-eslint/parser";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";

const compat = new FlatCompat({
	baseDirectory: fileURLToPath(import.meta.url)
});

const base = [
	js.configs.recommended,
	...compat.extends("plugin:@typescript-eslint/recommended"),
	...compat.plugins("@typescript-eslint"),
	{
		languageOptions: {
			globals: {
				...global.browser,
				...global.node
			},
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module"
			}
		}
	},
	{
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" }
			],
			"@typescript-eslint/no-non-null-assertion": "off"
		}
	}
];

export default [...base, prettier];

export const astro = [
	...base,
	{
		languageOptions: {
			globals: {
				...global.browser,
				...global.node
			}
		}
	},
	...compat.extends("plugin:astro/recommended"),
	...compat.extends("plugin:astro/jsx-a11y-strict"),
	{
		files: ["*.astro"],
		languageOptions: {
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: [".astro"]
			}
		}
	},
	{
		files: ["**/*.astro/*.js", "*.astro/*.js"],
		languageOptions: {
			globals: {
				...global.browser
			},
			parser: tsParser,
			parserOptions: {
				sourceType: "module",
			}
		},
		rules: {
			"prettier/prettier": "off",
		}
	},
	prettier
];
