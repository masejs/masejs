<p align="center">
<img alt="Logo Banner" src="https://github.com/Opensource-Paper/PaperScript/blob/8cd9ee1cf372d2e5f26d64393c3336187fe8bb09/banner/banner%20(6).svg?sanitize=true"/>
<br/>

<div align="left">Paper JS is a new way to write HTML entirely in your JavaScript.</div>
<div align="left">

[Documentation](https://paperui.com/)

</div>

## Installation

### CDN

Import Paper JS using CDN. The import-min.js file will automatically import all styles and JavaScript files into the ```<head>```.

```html
<script type="module" src="https://unpkg.com/paperjs"></script>
```

#### 🚧 Specific Version
```html
<script type="module" src="https://unpkg.com/paperjs@latest"></script>
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

Import icon definitions from ```paperjs```.

```index.js```

```js
import paperJS from 'paperjs';

PaperJSInterpreter.interpret(paperjs);
```

## Usage

Use the tree structure in Javascript. Refer to the [Docs](https://paperui.com) for more guidance on using the library. That's it 🎉.

```JS```

```js
const paperjs = {
  div: {
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
    div: [
      {
        button: [
          {
            value: 'Submit',
          },
        ],
      },
    ],
  },
};

PaperJSInterpreter.interpret(paperjs);
```

Check out the demo on [codepen](https://codepen.io/GreenestGoat/pen/zYQEjML).

<!--## Backers

Thank you to all our backers! 🙏.

[![Backers](https://opencollective.com/bootstrap/backers.svg?width=890)](https://opencollective.com/bootstrap#backers)-->


## Copyright and license

Licensed under the MIT License, Copyright © 2024-present Opensource-Paper.

See [LICENSE](https://github.com/Opensource-Paper/PaperJS/blob/main/LICENSE) for more information.
