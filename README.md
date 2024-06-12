<p align="center">
<img alt="Logo Banner" src="https://github.com/Opensource-Paper/PaperScript/blob/8cd9ee1cf372d2e5f26d64393c3336187fe8bb09/banner/banner%20(6).svg?sanitize=true"/>
<br/>

<div align="left">Paper JS is a new way to write HTML entirely in your JavaScript.</div>
<div align="left">

<!--[Documentation](https://paperui.com/)-->

</div>

## Installation

### CDN

Import Paper JS using CDN.

```js
import { PaperJSInterpreter } from 'https://unpkg.com/paperjs/import.min.js';
```

#### 🚧 Specific Version
```js
import { PaperJSInterpreter } from 'https://unpkg.com/paperjs@latest/import.min.js';
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

Use the tree structure in Javascript. <!--Refer to the [Documentation](https://paperui.com) for more guidance on using the library.-->That's it 🎉.

```script.js```

```js
import { PaperJSInterpreter } from 'https://unpkg.com/paperjs/import.min.js';

const paperjs = {
  div: {
    class: 'container',
    styles: 'justify-content: center;display: flex;align-items: center;height: 100%;width: 100%;top: 0;left: 0;right: 0;bottom:0;position: fixed;',
    div: [
      {
        input: [
          {
            placeholder: 'Email',
            type: 'email',
          },
          {
            placeholder: 'Password',
            type: 'password',
          },
        ],
        button: [
          {
            value: 'Submit',
            type: 'submit',
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
