# vite-config

Shared config for vite

## Installation

```sh
npm i --save-dev @schoero/vite-config
```

## Usage

Create a `vite.config.js` with the following content:

```js
import { config, defineConfig } from "@schoero/vite-config";


export default defineConfig({
  ...config
  // your config here
});
```
