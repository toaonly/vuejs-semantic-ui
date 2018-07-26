import { isValid, convertNumberToWord } from './util'

let validateProps = (
  props = {
    /** @type {boolean} */
    secondary,

    /** @type {boolean} */
    pointing,

    /** @type {boolean} */
    tabular,

    /** @type {boolean} */
    text,

    /** @type {boolean} */
    vertical,

    /** @type {boolean} */
    pagination,

    /** @type {boolean} */
    stackable,

    /** @type {boolean} */
    inverted,

    /** @type {boolean} */
    fluid,

    /** @type {boolean} */
    compact,

    /** @type {boolean} */
    borderless,

    /** @type {boolean} */
    right,

    /** @type {boolean} */
    left,

    /** @type {boolean | string} */
    icon,

    /** @type {string} */
    fixed,

    /** @type {string} */
    color,

    /** @type {string | number} */
    column,

    /** @type {boolean | string} */
    attached,

    /** @type {string} */
    size
  }
) => {
  return {
    secondary: (value => isValid.boolean(value) ? value : void 0)(props.secondary),

    pointing: (value => isValid.boolean(value) ? value : void 0)(props.pointing),

    tabular: (value => isValid.boolean(value) ? value : void 0)(props.tabular),

    text: (value => isValid.boolean(value) ? value : void 0)(props.text),

    vertical: (value => isValid.boolean(value) ? value : void 0)(props.vertical),

    pagination: (value => isValid.boolean(value) ? value : void 0)(props.pagination),

    stackable: (value => isValid.boolean(value) ? value : void 0)(props.stackable),

    inverted: (value => isValid.boolean(value) ? value : void 0)(props.inverted),

    fluid: (value => isValid.boolean(value) ? value : void 0)(props.fluid),

    compact: (value => isValid.boolean(value) ? value : void 0)(props.compact),

    borderless: (value => isValid.boolean(value) ? value : void 0)(props.borderless),

    right: (value => isValid.boolean(value) ? value : void 0)(props.right),

    left: (value => isValid.boolean(value) ? value : void 0)(props.left),

    icon: (value => {
      if (isValid.boolean(value)) {
        if (value === true) return 'icon';
      }

      if (isValid.string(value) && value === 'labeled') {
        return 'labeled icon';
      }

      return void 0;
    })(props.icon),

    fixed: (value => isValid.string(value) ? value : void 0)(props.fixed),

    color: (value => isValid.string(value) ? value : void 0)(props.color),

    column: (value => {
      if(isValid.string(value)) {
        let numValue = Number(value);

        if(isNaN(numValue))  {
          return value + ' item';
        } else {
          value = numValue;
        }
      }

      if(isValid.number(value)) {
        return convertNumberToWord(value) + ' item';
      }

      return void 0;
    })(props.column),

    attached: (value => {
      if(value === true)  return 'attached';
      if(isValid.string(value)) return `${value} attached`;

      return void 0;
    })(props.attached),

    size: (value => isValid.string(value) ? value : void 0)(props.size)
  };
}

class Menu {
  constructor(props = {
    secondary,
    pointing,
    tabular,
    text,
    vertical,
    pagination,
    stackable,
    inverted,
    fluid,
    compact,
    borderless,
    right,
    left,

    icon,

    fixed,
    color,
    column,
    attached,
    size
  }) {
    let validProps = validateProps(props);

    this.secondary = validProps.secondary;
    this.pointing = validProps.pointing;
    this.tabular = validProps.tabular;
    this.text = validProps.text;
    this.vertical = validProps.vertical;
    this.pagination = validProps.pagination;
    this.stackable = validProps.stackable;
    this.inverted = validProps.inverted;
    this.fluid = validProps.fluid;
    this.compact = validProps.compact;
    this.borderless = validProps.borderless;
    this.right = validProps.right;
    this.left = validProps.left;

    this.icon = validProps.icon;

    this.fixed = validProps.fixed;
    this.color = validProps.color;
    this.column = validProps.column;
    this.attached = validProps.attached;
    this.size = validProps.size;
  }

  generateClassName() {
    let className = '';

    if(!(this.right || this.left))  className = `ui`;

    if(this.secondary) className += ` secondary`
    if(this.pointing) className += ` pointing`
    if(this.tabular) className += ` tabular`
    if(this.text) className += ` text`
    if(this.vertical) className += ` vertical`
    if(this.pagination) className += ` pagination`
    if(this.stackable) className += ` stackable`
    if(this.inverted) className += ` inverted`
    if(this.fluid) className += ` fluid`
    if(this.compact) className += ` compact`
    if(this.borderless) className += ` borderless`

    if(this.icon) className += ` ${this.icon}`

    if(this.fixed) className += ` ${this.fixed} fixed`
    if(this.attached) className += ` ${this.attached}`
    if(this.column) className += ` ${this.column}`
    if(this.color) className += ` ${this.color}`
    if(this.size) className += ` ${this.size}`

    if(this.right) className += ` right`
    if(this.left) className += ` left`

    className += ' menu';

    return className;
  }
}

export default Menu
