<p align="center">
<img alt="Logo Banner" src="https://github.com/Opensource-Paper/PaperScript/blob/8cd9ee1cf372d2e5f26d64393c3336187fe8bb09/banner/banner%20(6).svg?sanitize=true"/>
<br/>

<!--![GitHub issues](https://img.shields.io/github/issues/Opensource-Paper/PaperJS)-->
[![npm version](https://img.shields.io/npm/v/paperjs.svg)](https://www.npmjs.com/package/paperjs)
![File Size](https://img.shields.io/github/size/Opensource-Paper/PaperJS/packages/paperjs/import.min.js?style=flat-square)
![Forks](https://img.shields.io/github/forks/Opensource-Paper/PaperJS.svg?style=flat)
![Stars](https://img.shields.io/github/stars/Opensource-Paper/PaperJS.svg?style=flat)
![Issues](https://img.shields.io/github/issues/Opensource-Paper/PaperJS.svg?style=flat)
![License](https://img.shields.io/badge/license-MIT-green)
[![Donate on Kofi](https://img.shields.io/badge/Donate-Kofi-F16061?logo=ko-fi&logoColor=white)](https://ko-fi.com/brick_wall)
<a href="https://discord.gg/Mbtnv9BN">
  <img src="https://img.shields.io/badge/discord-join-7289DA.svg?logo=discord&longCache=true&style=flat" />
</a>

<div align="left">Paper JS is a new way to write HTML entirely in your JavaScript.</div>
<div align="left">

<!--[Documentation](https://paperui.com/)-->
<!--[Discord](https://discord.gg/Mbtnv9BN)-->

</div>

## Installation

### CDN

Import Paper JS using CDN.

```js
import { PaperJSInterpreter } from 'https://unpkg.com/paperjs';
```

#### 🚧 Specific Version
```js
import { PaperJSInterpreter } from 'https://unpkg.com/paperjs@latest';
```

<!--#### 🚧 Development
```html
<script type="module" src="https://unpkg.com/papericons@latest"></script>
```-->

### NPM

Install Paper JS using [npm and node](https://nodejs.org/en).

```bash
npm install paperjs
```

## Import

Import paperjs definitions from ```PaperJSInterpreter```.

```index.js```

```js
import { PaperJSInterpreter } from './paperjs/import.min.js';

PaperJSInterpreter.interpret(paperjs);
```

## Usage

Use the tree structure in your Javascript. <!--Refer to the [Documentation](https://paperui.com) for more guidance on using the library.-->That's it 🎉.

```script.js```

```js
import { PaperJSInterpreter } from 'https://unpkg.com/paperjs';

const paperjs = {
  div: {
    class: 'container',
    styles: 'justify-content: center;display: flex;align-items: center;height: 100%;width: 100%;top: 0;left: 0;right: 0;bottom: 0;position: fixed;',
    form: [
      {
        styles: 'width: 300px;',
        input: [
          {
            type: 'email',
            placeholder: 'Email',
            styles: 'display: flex;width: 100%;height: 38px;',
          },
          {
            type: 'password',
            styles: 'margin-top: 12px;display: flex;width: 100%;height: 38px;',
            placeholder: 'Password',
          },
        ],
        label: [
          {
            value: 'Join newsletter',
            styles: 'display: flex;font-family: "Roboto", sans-serif;margin-top: 28px;width: 100%',
            input: [
              {
                type: 'checkbox',
                id: 'checkbox',
                styles: 'display: flex;margin-left: 10px;',
              },
            ],
          },
        ],
        button: [
          {
            styles: 'margin-top: 20px;display: flex;width: 100%;align-items: center;height: 32px;justify-content: center;',
            value: 'Reset',
            type: 'reset',
            class: 'reset-button',
          },
        ],
      },
    ],
  },
};

PaperJSInterpreter.interpret(paperjs);
```

Check out the demo on [codepen](https://codepen.io/GreenestGoat/pen/zYQEjML).

Using the library with [Material UI ](https://codepen.io/GreenestGoat/pen/GRaMLXR?editors=1010).

<!--## Backers

Thank you to all our backers! 🙏.

[![Backers](https://opencollective.com/bootstrap/backers.svg?width=890)](https://opencollective.com/bootstrap#backers)-->


## Copyright and license

Licensed under the MIT License, Copyright © 2024-present Opensource-Paper.

See [LICENSE](https://github.com/Opensource-Paper/PaperJS/blob/main/LICENSE) for more information.
