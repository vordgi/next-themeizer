# Next themeizer
Package for adding "Themeizer" ecosystem interaction configuration to your next.js application.

## Installation

Using npm:
```bash
$ npm install next-themeizer
```

Using yarn:
```bash
$ yarn add next-themeizer
```

## Configuration

| Option | Required | Type | Description |
| ------ | -------- | ---- | ----------- |
| url    | true     | string | api url to load and read colors |
| headers | false | JSON object | an object of headers required for reading from api |
| revalidate | false | number | period in which to fetch styles (in minutes) |

1. Add configuration to environment variables. For example, via `.env` files:
```js
// .env.local
THEMEIZER_OPTIONS={"url":"https://example.com/api/themes","revalidate":0.1,"headers":{"token":"example-token"}}
```

2. Add themeizer to your app config:
```js
// next.config.js
const withThemeizer = require('next-themeizer').default;

module.exports = withThemeizer({
    // your next.js configuration
})
```

## Usage
More about usage on [main package page](https://www.npmjs.com/package/themeizer).

## License

[MIT](https://github.com/vordgi/themeizer/blob/main/LICENSE)