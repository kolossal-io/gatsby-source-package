# gatsby-source-package

This plugin allows you to source the contents of `package.json`.

## Install

```bash
npm install --save gatsby-source-package
```

or

```bash
yarn add gatsby-source-package
```

## How to use

Add the plugin to `gatsby-config.js`..

```js
module.exports = {
  plugins: [...`gatsby-source-package`],
};
```

You may only source some of the keys in `package.json`:

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-package`,
      options: {
        only: ['name', 'version', 'description'],
      },
    },
  ],
};
```

## Query package.json

The GraphQL query will match your `package.json`:

```graphql
query {
  package {
    name
    version
    description
  }
}
```

Result:

```json
{
  "data": {
    "package": {
      "name": "gatsby-starter-hello-world",
      "version": "0.1.0",
      "description": "A simplified bare-bones starter for Gatsby"
    }
  },
  "extensions": {}
}
```
