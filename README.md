# Next themeizer
Package for adding "Themeizer" ecosystem interaction configuration to your next.js application.

## Installation

**Using npm:**
```bash
$ npm install next-themeizer
```

**Using yarn:**
```bash
$ yarn add next-themeizer
```

## Configuration

| Option | Required | Type | Description |
| ------ | -------- | ---- | ----------- |
| url    | true     | string | api url to load and read colors |
| headers | false | JSON object | an object of headers required for reading from api |
| revalidate | false | number | period in which to fetch styles (in minutes) |

### Add configuration to environment variables.
For example, via `.env` files:
```js
// .env.local
THEMEIZER_OPTIONS={"url":"https://example.com/api/themes","revalidate":0.1,"headers":{"token":"example-token"}}
```

### Add themeizer to your app config:

**Base:**
```js
const withThemeizer = require('next-themeizer').default;

module.exports = withThemeizer({
    // next.js config
});
```

**With `next-compose-plugins`:**
```js
const withThemeizer = require('next-themeizer').default;
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    [withThemeizer]
], nextConfig);
```

## Usage
More about usage on [main package page](https://www.npmjs.com/package/themeizer).

## Themeizer ecosystem
* [Figma plugin "Themeizer"](https://www.figma.com/community/plugin/1065764293242137356/Themeizer) - plugin for changing themes in design and publishing them in the cloud;
* [themeizer](https://www.npmjs.com/package/themeizer) - package for embedding themes from "Themeizer" Figma plugin at the server level or at build stage;
* [next-themeizer](https://www.npmjs.com/package/next-themeizer) - package for adding "Themeizer" ecosystem interaction configuration to your next.js application;
* [themeizer-cli](https://www.npmjs.com/package/themeizer-cli) - a package to automatically replace published colors (as well as linear and radial gradients) in style files with a css variable;
* [stylelint-themeizer](https://www.npmjs.com/package/stylelint-themeizer) - stylelint plugin for "Themeizer" ecosystem.

## License

[MIT](https://github.com/vordgi/themeizer/blob/main/LICENSE)