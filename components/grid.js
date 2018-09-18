import { isValid, convertNumberToWord } from './util'
import Segment from './segment'

let setValues = (props = {
  /** @type {boolean} */
  container,
  internally,
  padded,
  equalWidth,
  centered,
  justified,
  stackable,
  computer,
  tablet,
  mobile,
  divided,
  vertically,
  horizontally,
  doubling,
  reversed,
  widescreen,
  stretched,

  /** @type {string} */
  aligned,
  device,

  /** @type {number | string} */
  column,

  /** @type {boolean | string} */
  celled,
  relaxed,

  /** @type {boolean | Segment} */
  segment
}) => {
  return {
    /** @type {boolean} */
    container: (value => (isValid.boolean(value) ? value : void 0))(props.container),

    /** @type {boolean} */
    internally: (value => (isValid.boolean(value) ? value : void 0))(props.internally),

    /** @type {boolean} */
    padded: (value => (isValid.boolean(value) ? value : void 0))(props.padded),

    /** @type {boolean} */
    equalWidth: (value => (isValid.boolean(value) ? value : void 0))(props.equalWidth),

    /** @type {boolean} */
    centered: (value => (isValid.boolean(value) ? value : void 0))(props.centered),

    /** @type {boolean} */
    justified: (value => (isValid.boolean(value) ? value : void 0))(props.justified),

    /** @type {boolean} */
    stackable: (value => (isValid.boolean(value) ? value : void 0))(props.stackable),

    /** @type {boolean} */
    computer: (value => (isValid.boolean(value) ? value : void 0))(props.computer),

    /** @type {boolean} */
    tablet: (value => (isValid.boolean(value) ? value : void 0))(props.tablet),

    /** @type {boolean} */
    mobile: (value => (isValid.boolean(value) ? value : void 0))(props.mobile),

    /** @type {boolean} */
    divided: (value => (isValid.boolean(value) ? value : void 0))(props.divided),

    /** @type {boolean} */
    vertically: (value => (isValid.boolean(value) ? value : void 0))(props.vertically),

    /** @type {boolean} */
    horizontally: (value => (isValid.boolean(value) ? value : void 0))(props.horizontally),

    /** @type {boolean} */
    doubling: (value => (isValid.boolean(value) ? value : void 0))(props.doubling),

    /** @type {boolean} */
    reversed: (value => (isValid.boolean(value) ? value : void 0))(props.reversed),

    /** @type {boolean} */
    widescreen: (value => (isValid.boolean(value) ? value : void 0))(props.widescreen),

    /** @type {boolean} */
    stretched: (value => (isValid.boolean(value) ? value : void 0))(props.stretched),

    /** @type {string} */
    aligned: (value => (isValid.string(value) ? value : void 0))(props.aligned),

    /** @type {string} */
    device: (value => (isValid.string(value) ? value : void 0))(props.device),

    /** @type {string} */
    column: (value => {
      if(isValid.string(value)) {
        let numValue = Number(value);

        if(isNaN(numValue))  {
          return value;
        } else {
          value = numValue;
        }
      }

      if(isValid.number(value)) {
        return convertNumberToWord(value);
      }

      return void 0;
    })(props.column),

    /** @type {string} */
    celled: ((value) => {
      if(value === true) return `celled`;
      if(isValid.string(value)) return `${value} celled`;

      return void 0;
    })(props.celled),

    /** @type {string} */
    relaxed: ((value) => {
      if(value === true) return `relaxed`;
      if (isValid.string(value)) return `${value} relaxed`;

      return void 0;
    })(props.relaxed),

    segment: (value => {
      if(value === true)  return new Segment({});
      if(isValid.object(value)) return new Segment(value);

      return void 0;
    })(props.segment)
  };
};

class Grid {
  constructor(props = {
    /** @type {boolean} */
    container,
    internally,
    padded,
    equalWidth,
    centered,
    justified,
    stackable,
    computer,
    tablet,
    mobile,
    divided,
    vertically,
    horizontally,
    doubling,
    reversed,
    widescreen,
    stretched,

    /** @type {string} */
    aligned,
    device,

    /** @type {number | string} */
    column,

    /** @type {boolean | string} */
    celled,
    relaxed,

    /** @type {boolean | Segment} */
    segment
  }) {
    let _props = setValues(props);

    this.container = _props.container;
    this.internally = _props.internally;
    this.padded = _props.padded;
    this.equalWidth = _props.equalWidth;
    this.centered = _props.centered;
    this.justified = _props.justified;
    this.stackable = _props.stackable;
    this.computer = _props.computer;
    this.tablet = _props.tablet;
    this.mobile = _props.mobile;
    this.divided = _props.divided;
    this.vertically = _props.vertically;
    this.horizontally = _props.horizontally;
    this.doubling = _props.doubling;
    this.reversed = _props.reversed;
    this.widescreen = _props.widescreen;
    this.stretched = _props.stretched;

    this.aligned = _props.aligned;
    this.device = _props.device;

    this.column = _props.column;

    this.celled = _props.celled;
    this.relaxed = _props.relaxed;

    this.segment = _props.segment;
  }

  generateClassName() {
    let className = 'ui ';

    if (this.container) className += `container `
    if (this.internally) className += `internally `
    if (this.equalWidth) className += `equal width `
    if (this.centered) className += `centered `
    if (this.justified) className += `justified `
    if (this.stackable) className += `stackable `
    if (this.computer) className += `computer `
    if (this.tablet) className += `tablet `
    if (this.mobile) className += `mobile `
    if (this.divided) className += `divided `
    if (this.vertically) className += `vertically `
    if (this.horizontally) className += `horizontally `
    if (this.padded) className += `padded `
    if (this.doubling) className += `doubling `
    if (this.reversed) className += `reversed `
    if (this.widescreen) className += `widescreen `
    if (this.stretched) className += `stretched `

    if (this.aligned) className += `${this.aligned} aligned `
    if (this.device) className += `${this.device} only `

    if (this.column) className += `${this.column} column `

    if (this.celled) className += `${this.celled} `
    if (this.relaxed) className += `${this.relaxed} `

    className += 'grid';

    if(this.segment) {
      className += (' ' + this.segment.generateClassName().replace('ui', ''));
    }

    return className;
  }
}

export default Grid
