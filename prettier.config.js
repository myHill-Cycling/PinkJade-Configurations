/** @type {import("prettier").Options} */
const base = {
	useTabs: true,
	tabWidth: 4,
	semi: true,
	singleQuote: false,
	jsxSingleQuote: false,
	trailingComma: "none",
	bracketSpacing: true,
	jsxBracketSameLine: true,
	arrowParens: "avoid",
	endOfLine: "auto",
	pluginSearchDirs: false
}

export default base;

/** @type {import("prettier").Options} */
export const astro = {
	...base,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
}