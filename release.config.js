/** @type {import("semantic-release").Options} */
export default {
	branches: [
		"main",
		{
			name: "beta",
			prerelease: true
		}
	],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/changelog",
		[
			"@semantic-release/npm",
			{
				tarballDir: "dist"
			}
		],
		[
			"@semantic-release/github",
			{
				assets: [
					{
						path: "./eslint.config.js",
						label: "ESLint Configuration"
					},
					{
						path: "./prettier.config.js",
						label: "Prettier Configuration"
					},
					{
						path: "./lint-staged.config.js",
						label: "Lint Staged Configuration"
					},
					{
						path: "renovate.json5",
						label: "Renovate Configuration"
					},
					{
						path: "./release.config.js",
						label: "Semantic Release Configuration"
					},
					{
						path: "./dist/*.tgz",
						label: "NPM Package"
					}
				]
			}
		],
		[
			"@semantic-release/git",
			{
				assets: ["CHANGELOG.md", "package.json"]
			}
		]
	]
};
