import { isValid, isValidProp } from './util'

let validateProps = (
  props = {
    /** @type {string} */
    src,

    /** @type {object} */
    svg,

    /** @type {string} */
    link,

    /** @type {boolean} */
    hidden,

    /** @type {boolean} */
    reveal,

    /** @type {boolean} */
    disabled,

    /** @type {boolean} */
    avatar,

    /** @type {boolean} */
    bordered,

    /** @type {boolean} */
    fluid,

    /** @type {boolean} */
    rounded,

    /** @type {boolean} */
    circular,

    /** @type {boolean} */
    aligned,

    /** @type {boolean} */
    centered,

    /** @type {string | boolean} */
    spaced,

    /** @type {string} */
    floated,

    /** @type {string} */
    slide,

    /** @type {string} */
    size
  }
) => {
  return {
    src: ((value) => {
      if(isValid.string(value)) {
        // if(value.indexOf('./') >= 0 || value.indexOf('../') >= 0) {
        //   value = require(value);
        // }

        return value;
      }

      return void 0;
    })(props.src),
    svg: ((value) => (isValid.object(value) ? value : void (0)))(props.svg),
    link: ((value) => (isValid.string(value) ? value : void (0)))(props.link),
    hidden: ((value) => (isValid.boolean(value) ? value : void (0)))(props.hidden),
    reveal: ((value) => (isValid.boolean(value) ? value : void (0)))(props.reveal),
    disabled: ((value) => (isValid.boolean(value) ? value : void (0)))(props.disabled),
    avatar: ((value) => (isValid.boolean(value) ? value : void (0)))(props.avatar),
    bordered: ((value) => (isValid.boolean(value) ? value : void (0)))(props.bordered),
    fluid: ((value) => (isValid.boolean(value) ? value : void (0)))(props.fluid),
    rounded: ((value) => (isValid.boolean(value) ? value : void (0)))(props.rounded),
    circular: ((value) => (isValid.boolean(value) ? value : void (0)))(props.circular),
    aligned: ((value) => (isValid.string(value) ? value : void (0)))(props.aligned),
    centered: ((value) => (isValid.boolean(value) ? value : void (0)))(props.centered),
    spaced: ((value) => {
      if ((isValid.string(value) || isValid.boolean(value))) {
        if (value === false) return void (0);
        if (value === true) return 'spaced';

        return `${value} spaced`;
      }

      return void (0);
    })(props.spaced),
    floated: ((value) => (isValid.string(value) ? value : void (0)))(props.floated),
    slide: ((value) => (isValid.string(value) ? value : void (0)))(props.slide),
    size: ((value) => (isValid.string(value) ? value : void (0)))(props.size),
  }
}

export class SvgImage {
  constructor({
    src,
    x,
    y,
    width,
    height
  }) {
    /** @type {string} */
    this.src = src;

    /** @type {number} */
    this.x = x;

    /** @type {number} */
    this.y = y;

    /** @type {string | number} */
    this.width = width;

    /** @type {string | number} */
    this.height = height;
  }
}

export class Svg {
  constructor({
    width,
    height,
    image
  }) {
    /** @type {number} */
    this.width = width;

    /** @type {number} */
    this.height = height;

    /** @type {SvgImage} */
    this.image = image;
  }
}

export default class Image {
  constructor(props = {
    src,
    svg,
    link,
    hidden,
    reveal,
    disabled,
    avatar,
    bordered,
    fluid,
    rounded,
    circular,
    aligned,
    centered,
    spaced,
    floated,
    slide,
    size
  }) {
    let validProps = validateProps(props);

    /** @type {string} */
    this.src = validProps.src;

    /** @type {Svg} */
    this.svg = validProps.svg;

    /** @type {string} */
    this.link = validProps.link;

    /** @type {boolean} */
    this.hidden = validProps.hidden;

    /** @type {boolean} */
    this.reveal = validProps.reveal;

    /** @type {boolean} */
    this.disabled = validProps.disabled;

    /** @type {boolean} */
    this.avatar = validProps.avatar;

    /** @type {boolean} */
    this.bordered = validProps.bordered;

    /** @type {boolean} */
    this.fluid = validProps.fluid;

    /** @type {boolean} */
    this.rounded = validProps.rounded;

    /** @type {boolean} */
    this.circular = validProps.circular;

    /** @type {string} */
    this.aligned = validProps.aligned;

    /** @type {boolean} */
    this.centered = validProps.centered;

    /** @type {string | boolean} */
    this.spaced = validProps.spaced;

    /** @type {string} */
    this.floated = validProps.floated;

    /** @type {string} */
    this.slide = validProps.slide;

    /** @type {string} */
    this.size = validProps.size;
  }
}

export class ImageGroup {
  constructor(props = {
    size
  }) {
    let validProps = validateProps(props);

    /** @type {string} */
    this.size = validProps.size;
  }
}
