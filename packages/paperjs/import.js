class PaperJSInterpreter {
    static interpret(paperjs) {
      for (const tag in paperjs) {
        const element = this.createElement(tag, paperjs[tag]);
        this.applyElementOptions(element, paperjs[tag]);
        document.body.appendChild(element);
      }
    }
  
    static createElement(tag, options) {
      if (typeof options === 'string') {
        const element = document.createElement('custom-element');
        element.innerHTML = options;
        return element;
      } else {
        const element = document.createElement(tag);
        return element;
      }
    }
  
    static applyElementOptions(element, options) {
      if (typeof options === 'object') {
        for (const option in options) {
          if (option === 'value') {
            element.textContent = options[option];
          } else if (option === 'styles') {
            this.applyStyles(element, options[option]);
          } else if (option === 'class') {
            element.classList.add(options[option]);
          } else if (option === 'id') {
            element.id = options[option];
          } else if (Array.isArray(options[option])) {
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
  
    static applyStyles(element, styles) {
      if (styles) {
        const styleArray = styles.split(';');
        for (const style of styleArray) {
          if (style.trim() !== '') {
            const [property, value] = style.split(':');
            element.style[property.trim()] = value.trim();
          }
        }
      }
    }
  }