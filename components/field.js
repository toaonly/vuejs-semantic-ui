import { isValid, convertNumberToWord } from './util'

let setFieldValues = (props = {
  label,

  disabled,
  inline,
  error,
  required,

  width,
}) => {
  return {
    /** @type {string} */
    label: (value => (isValid.string(value) ? value : void 0))(props.label),

    /** @type {boolean} */
    disabled: (value => (isValid.boolean(value) ? value : void 0))(props.disabled),

    /** @type {boolean} */
    inline: (value => (isValid.boolean(value) ? value : void 0))(props.inline),

    /** @type {boolean} */
    error: (value => (isValid.boolean(value) ? value : void 0))(props.error),

    /** @type {boolean} */
    required: (value => (isValid.boolean(value) ? value : void 0))(props.required),


    /** @type {string} */
    width: (value => (isValid.string(value) ? value : void 0))(props.width),
  };
};

let setFieldsValues = (props = {
  grouped,
  inline,
  equalWidth,

  column,
}) => {
  return {
    /** @type {boolean} */
    grouped: (value => (isValid.boolean(value) ? value : void 0))(props.grouped),

    /** @type {boolean} */
    inline: (value => (isValid.boolean(value) ? value : void 0))(props.inline),

    /** @type {boolean} */
    equalWidth: (value => (isValid.boolean(value) ? value : void 0))(props.equalWidth),


    /** @type {number | string} */
    column: (value => {
      if (isValid.string(value)) {
        let numValue = Number(value);

        if (isNaN(numValue)) return value;

        value = numValue;
      }

      if (isValid.number(value)) return convertNumberToWord(value);

      return void(0);
    })(props.column),
  };
};

class Field {
  constructor(props = {
    label,

    error,
    disabled,
    inline,
    required,

    width,
  }) {
    let _props = setFieldValues(props);

    this.label = _props.label;

    this.error = _props.error;
    this.disabled = _props.disabled;
    this.inline = _props.inline;
    this.required = _props.required;

    this.width = _props.width;
  }
}

class Fields {
  constructor(props = {
    grouped,
    equalWidth,
    inline,

    column
  }) {
    let _props = setFieldsValues(props);

    this.grouped = _props.grouped;
    this.equalWidth = _props.equalWidth;
    this.inline = _props.inline;

    this.column = _props.column;
  }
}

export default Field

export { Fields }
