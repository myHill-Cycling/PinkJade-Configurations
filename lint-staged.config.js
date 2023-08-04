import { fileURLToPath } from "url";
import { join } from "path";

export function getCacheDirFromMetaUrl(metaUrl) {
	console.log("metaUrl", metaUrl);
	return join(fileURLToPath(metaUrl), "..", "node_modules", ".cache");
}

export function generate(cacheDir) {
	console.log("cacheDir", cacheDir);
	const eslintCmd = `eslint --fix --cache --cache-location ${join(cacheDir, "eslint")}/`;
	const prettierCmd = `prettier --write --cache --cache-location ${join(cacheDir, "prettier", ".prettier-cache")}`;

	return {
		"*.{js,jsx,mjs,cjs,ts,tsx,md,html,css,json,yml,yaml,json5,code-workspace}": [eslintCmd, prettierCmd]
	};
}

export default generate(getCacheDirFromMetaUrl(import.meta.url));