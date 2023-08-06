![Logo](https://static.wixstatic.com/media/aa811e_3d3fc2e882e040c5bf6052ce1ef38da4~mv2.jpg/v1/fill/w_347,h_106,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/myhill-horizontal-logo-full-colour-small.jpg)

# PinkJade Configurations

Shared configurations for PinkJade and it's repositories/projects.

![Maintained with Renovate](https://img.shields.io/badge/Maintained%20With-Renovate-blue?style=for-the-badge&logo=renovatebot&link=https%3A%2F%2Fdocs.renovatebot.com%2Fkey-concepts%2Fdashboard%2F&link=https%3A%2F%2Fgithub.com%2Frenovatebot%2Frenovate)
![Package Manager - PNPM](https://img.shields.io/badge/Supported%20Package%20Manager-PNPM-yellow?style=for-the-badge&logo=pnpm)
![Child of a meta repo](https://img.shields.io/badge/Child%20of-meta%20repo-purple?style=for-the-badge&logo=gitextensions&link=https%3A%2F%2Fgithub.com%2FmyHill-Cycling%2FPinkJade-Meta)
![GitHub Packages version](https://img.shields.io/npm/v/%40myhill-cycling%2Fpinkjade-configuration/latest?registry_uri=https%3A%2F%2Fnpm.pkg.github.com&style=for-the-badge&logo=npm)

## Usage/Examples

Each configuration type is provided as a subpath of the package. These configurations are provided as ES Modules that can be imported, merged, edited and re-exported from the project's configuration file to provide the final configuration for the tooling.

### Eslint

Inside `esling.config.js`

```javascript
import base from "@myhill-cycling/pinkjade-configuration/eslint";

//apply any required modifications to the configuration here

export default base;
```

### Prettier

Inside `prettier.config.js`

```javascript
//Import a more targeted configuration compared to the general defaults
import { astro } from "@myhill-cycling/pinkjade-configuration/prettier";

//apply any required modifications to the configuration here

export default astro;
```

### Lint staged

Inside `lint-staged.config.js`

```javascript
//Configurations can also provide functions to allow you to more easily generate a configuration on demand
import {
	generate,
	getCacheDirFromMetaUrl
} from "@myhill-cycling/pinkjade-configuration/lint-staged";

//Export configuration generated by package from project parameters
export default generate(getCacheDirFromMetaUrl(import.meta.url));
```