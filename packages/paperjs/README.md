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

Import icon definitions from ```PaperJSInterpreter```.

```index.js```

```js
import { PaperJSInterpreter } from './import.min.js';

PaperJSInterpreter.interpret(paperjs);
```

## Usage

Use the tree structure in Javascript. Refer to the [Documentation](https://paperui.com) for more guidance on using the library. That's it 🎉.

```JS```

```HTML
<script type="module">
  import { PaperJSInterpreter } from 'https://unpkg.com/paperjs/import.min.js';

  const paperjs = {
    div: {
      styles: 'justify-content: center;display: flex;align-items: center;height: 100%;width: 100%;top: 0;left: 0;right: 0;bottom:0;position: fixed;',
      div: [
        {
          button: [
            {
              value: 'Button',
              styles: 'outline: none;border: none;height: 34px;width: 80px;border-radius: 9999px;',
            },
          ],
        },
      ],
    },
  };

  PaperJSInterpreter.interpret(paperjs);
</script>
```

Check out the demo on [codepen](https://codepen.io/GreenestGoat/pen/zYQEjML).

<!--## Backers

Thank you to all our backers! 🙏.

[![Backers](https://opencollective.com/bootstrap/backers.svg?width=890)](https://opencollective.com/bootstrap#backers)-->


## Copyright and license

Licensed under the MIT License, Copyright © 2024-present Opensource-Paper.

See [LICENSE](https://github.com/Opensource-Paper/PaperJS/blob/main/LICENSE) for more information.
