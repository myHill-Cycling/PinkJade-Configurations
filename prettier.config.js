/** @type {import("prettier").Options} */
const base = {
	useTabs: true,
	semi: true,
	singleQuote: false,
	jsxSingleQuote: false,
	trailingComma: "none",
	bracketSpacing: true,
	bracketSameLine: true,
	arrowParens: "avoid",
	endOfLine: "auto",
	quoteProps: "consistent",
	singleAttributePerLine: true
};

export default base;

/** @type {import("prettier").Options} */
export const astro = {
	...base,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"]
};
