import { isValid, convertNumberToWord } from './util'

let setFieldValues = (props = {
  /** @type {boolean} */
  centered,
  stretched,

  /** @type {string} */
  aligned,
  floated,
  color,
  device,

  /** @type {string | number} */
  column
}) => {
  return {
    /** @type {boolean} */
    centered: (value => (isValid.boolean(value) ? value : void 0))(props.centered),

    /** @type {boolean} */
    stretched: (value => (isValid.boolean(value) ? value : void 0))(props.stretched),

    /** @type {string} */
    aligned: (value => (isValid.string(value) ? value : void 0))(props.aligned),

    /** @type {string} */
    floated: (value => (isValid.string(value) ? value : void 0))(props.floated),

    /** @type {string} */
    color: (value => (isValid.string(value) ? value : void 0))(props.color),

    /** @type {string} */
    device: (value => (isValid.string(value) ? value : void 0))(props.device),

    /** @type {string} */
    column: (value => {
      if (isValid.number(value)) {
        return convertNumberToWord(value);
      } else if (isValid.string(value)) {
        return value;
      } else {
        return void 0;
      }
    })(props.column)
  };
};

class Row {

  constructor(props = {
    /** @type {boolean} */
    centered,
    stretched,

    /** @type {string} */
    aligned,
    floated,
    color,
    device,

    /** @type {string | number} */
    column
  }) {
    let _props = setFieldValues(props);

    this.centered = _props.centered;
    this.stretched = _props.stretched;

    this.aligned = _props.aligned;
    this.floated = _props.floated;
    this.color = _props.color;
    this.device = _props.device;

    this.column = _props.column;
  }
}

export default Row
