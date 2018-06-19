import { isValid } from './util'

let has = {
  type: (value) => isValid.string(value) ? value : void (0),

  focus: (value) => isValid.boolean(value) ? value : void(0),
  loading: (value) => isValid.boolean(value) ? value : void(0),
  disabled: (value) => isValid.boolean(value) ? value : void(0),
  error: (value) => isValid.boolean(value) ? value : void(0),
  transparent: (value) => isValid.boolean(value) ? value : void(0),
  inverted: (value) => isValid.boolean(value) ? value : void(0),
  fluid: (value) => isValid.boolean(value) ? value : void(0),

  icon: (value) => isValid.string(value) ? value : void(0),
  size: (value) => isValid.string(value) ? value : void(0),

  action: (value) => {
    if (isValid.boolean(value) && value === true) return `action`;
    if (isValid.string(value)) return `${value} action`;

    return void (0);
  },
  labeled: (value) => {
    if (isValid.boolean(value) && value === true) return ` labeled`;
    if(isValid.string(value)) return `${value} labeled`;

    return void(0);
  }
}

export default class Input {
  constructor({
    type,

    focus,
    loading,
    disabled,
    error,
    transparent,
    inverted,
    fluid,

    icon,
    iconLeft,
    size,

    action,
    labeled,
  }) {
    this.type = has.type(type);
    this.focus = has.focus(focus);
    this.loading = has.loading(loading);
    this.disabled = has.disabled(disabled);
    this.error = has.error(error);
    this.transparent = has.transparent(transparent);
    this.inverted = has.inverted(inverted);
    this.fluid = has.fluid(fluid);
    this.icon = has.icon(icon);
    this.iconLeft = has.icon(iconLeft);
    this.size = has.size(size);
    this.action = has.action(action);
    this.labeled = has.labeled(labeled);
  }
}
