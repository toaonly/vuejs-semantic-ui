import { isValid, convertNumberToWord } from './util'

let setFieldValues = (props = {
  /** @type {boolean} */
  stretched,

  /** @type {string} */
  aligned,
  floated,
  color,
  device,
  largeScreen,
  widescreen,
  computer,
  tablet,
  mobile,

  /** @type {string | number} */
  wide,
}) => {
  return {
    /** @type {string} */
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
    largeScreen: (value => (isValid.string(value) ? value : void 0))(props.largeScreen),

    /** @type {string} */
    widescreen: (value => (isValid.string(value) ? value : void 0))(props.widescreen),

    /** @type {string} */
    computer: (value => (isValid.string(value) ? value : void 0))(props.computer),

    /** @type {string} */
    tablet: (value => (isValid.string(value) ? value : void 0))(props.tablet),

    /** @type {string} */
    mobile: (value => (isValid.string(value) ? value : void 0))(props.mobile),

    /** @type {string} */
    wide: (value => {
      if (isValid.number(value)) {
        return convertNumberToWord(value);
      } else if (isValid.string(value)) {
        return value;
      } else {
        return void 0;
      }
    })(props.wide),
  };
};

class Column {

  constructor(props = {
    /** @type {boolean} */
    stretched,

    /** @type {string} */
    aligned,
    floated,
    color,
    device,
    largeScreen,
    widescreen,
    computer,
    tablet,
    mobile,

    /** @type {string | number} */
    wide,
  }) {
    let _props = setFieldValues(props);

    this.stretched = _props.stretched;

    this.aligned = _props.aligned;
    this.floated = _props.floated;
    this.color = _props.color;
    this.device = _props.device;
    this.largeScreen = _props.largeScreen;
    this.widescreen = _props.widescreen;
    this.computer = _props.computer;
    this.tablet = _props.tablet;
    this.mobile = _props.mobile;

    this.wide = _props.wide;
  }
}

export default Column
