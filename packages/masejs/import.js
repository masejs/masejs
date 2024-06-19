/*

   /$$$       /$$      /$$                                        /$$$$$  /$$$$$$        /$$$  
  /$$_/      | $$$    /$$$                                       |__  $$ /$$__  $$      |_  $$ 
 | $$        | $$$$  /$$$$  /$$$$$$   /$$$$$$$  /$$$$$$             | $$| $$  \__/        | $$ 
 /$$$        | $$ $$/$$ $$ |____  $$ /$$_____/ /$$__  $$            | $$|  $$$$$$         | $$$
|  $$        | $$  $$$| $$  /$$$$$$$|  $$$$$$ | $$$$$$$$       /$$  | $$ \____  $$        | $$/
 \ $$        | $$\  $ | $$ /$$__  $$ \____  $$| $$_____/      | $$  | $$ /$$  \ $$        | $$ 
 |  $$$      | $$ \/  | $$|  $$$$$$$ /$$$$$$$/|  $$$$$$$      |  $$$$$$/|  $$$$$$/       /$$$/ 
  \___/      |__/     |__/ \_______/|_______/  \_______/       \______/  \______/       |___/  
                                                                                               
*/

// export interpreter

export class MaseJSInterpreter {
  static interpret(masejs) {
    const fragment = document.createDocumentFragment();
    for (const tag in masejs) {
      const element = this.createElement(tag, masejs[tag]);
      this.applyElementOptions(element, masejs[tag]);
      fragment.appendChild(element);
    }
    document.body.appendChild(fragment);
  }

  static createElement(tag, options) {
    if (typeof options === 'string') {
      const element = document.createElement('custom-element');
      element.innerHTML = options;
      return element;
    } else {
      return document.createElement(tag);
    }
  }

  static applyElementOptions(element, options) {
    if (typeof options === 'object') {
      for (const option in options) {
        switch (option) {
          case 'value':
            element.textContent = options[option];
            break;
          case 'styles':
            this.applyStyles(element, options[option]);
            break;
          case 'class':
            element.className = options[option];
            break;
          case 'id':
            element.id = options[option];
            break;
          case 'events':
            this.applyEventListeners(element, options[option]);
            break;
          case 'center':
            if (options[option] === 'true') {
              element.style.display = 'flex';
              element.style.justifyContent = 'center';
              element.style.alignItems = 'center';
            }
            break;
          default:
            if (Array.isArray(options[option])) {
              for (const item of options[option]) {
                const nestedElement = this.createElement(option, item);
                this.applyElementOptions(nestedElement, item);
                element.appendChild(nestedElement);
              }
            } else {
              element.setAttribute(option, options[option]);
            }
        }
      }
    }
  }

  static applyStyles(element, styles) {
    if (styles && typeof styles === 'object') {
      for (const [property, value] of Object.entries(styles)) {
        element.style[property] = value;
      }
    }
  }

  static applyEventListeners(element, events) {
    if (events && typeof events === 'object') {
      for (const [event, handler] of Object.entries(events)) {
        element.addEventListener(event, handler);
      }
    }
  }
}