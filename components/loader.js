import { isValid } from './util'

let get = {
  indeterminate: (value) => isValid.boolean(value) ? value : void(0),
  active: (value) => isValid.boolean(value) ? value : void(0),
  disabled: (value) => isValid.boolean(value) ? value : void(0),
  inverted: (value) => isValid.boolean(value) ? value : void(0),

  text: (value) => isValid.string(value) ? value : void(0),
  size: (value) => isValid.string(value) ? value : void(0),

  inline: (value) => {
    if(isValid.boolean(value) && value) {
      return 'inline';
    }

    if (isValid.string(value))  {
      return `${value} inline`;
    }

    return void(0);
  },
}

class Loader {
  constructor({
    indeterminate,
    active,
    disabled,
    inverted,

    text,
    size,

    inline,
  }) {
    this.indeterminate = get.indeterminate(indeterminate);
    this.active = get.active(active);
    this.disabled = get.disabled(disabled);
    this.inverted = get.inverted(inverted);

    this.text = get.text(text);
    this.size = get.size(size);

    this.inline = get.inline(inline);
  }
}

export default Loader;
