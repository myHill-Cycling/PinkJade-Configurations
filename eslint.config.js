import global from "globals";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import astroBase from "eslint-plugin-astro";
import astroAlly from "eslint-plugin-jsx-a11y";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";

const base = [
	js.configs.recommended,
	{
		languageOptions: {
            globals: {
                ...global.browser,
				...global.node
            },
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			}
        }
	},
	{
		...ts.configs,
		files: ["*.ts", "*.tsx"],
		languageOptions: {
			parser: tsParser
		},
		rules: {
			...ts.rules,
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-non-null-assertion': 'off',
		},
	  }
]

export default [
	...base,
	prettier
];

const compat = new FlatCompat({
	baseDirectory: fileURLToPath(import.meta.url)
})
console.log(compat.baseDirectory)
export const astro = [
	...base,
	{
		languageOptions: {
            globals: {
                ...global.browser,
				...global.node,
				...astroBase.environments.astro.globals
            }
        }
	},
	...compat.extends("plugin:astro/recommended"),
	...compat.extends("plugin:astro/jsx-a11y-strict"),
	prettier
]