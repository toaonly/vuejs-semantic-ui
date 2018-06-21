import { isValid } from './util'

/**
 * @param {Label} props
 */
let validateProps = (props) => {
  return {
    src: (value => (isValid.string(value) ? value : void (0)))(props.src),
    color: (value => (isValid.string(value) ? value : void (0)))(props.color),
    pointing: (value => {
      if (value === true) return 'pointing';
      if (isValid.string(value)) {
        if (value === 'below') return 'pointing below';
        if (value === 'left' || value === 'right') return `${value} pointing`;
      }

      return void (0);
    })(props.pointing),
    corner: (value => (isValid.string(value) ? value : void (0)))(props.corner),
    tagged: (value => (isValid.boolean(value) ? value : void (0)))(props.tagged),
    ribbon: (value => {
      if (value === true) return 'ribbon';
      if (isValid.string(value) && value === 'right')  return 'right ribbon';

      return void (0);
    })(props.ribbon),
    detail: (value => (isValid.string(value) ? value : void (0)))(props.detail),
    icon: (value => (isValid.string(value) ? value : void (0)))(props.icon),
    attached: (value => (isValid.string(value) ? value : void (0)))(props.attached),
    horizontal: (value => (isValid.boolean(value) ? value : void (0)))(props.horizontal),
    floating: (value => (isValid.boolean(value) ? value : void (0)))(props.floating),
    circular: (value => {
      if (value === true) return 'circular';
      if (isValid.string(value) && value === 'empty') return 'empty circular';

      return void (0);
    })(props.circular),
    basic: (value => (isValid.boolean(value) ? value : void (0)))(props.basic),
    size: (value => (isValid.string(value) ? value : void (0)))(props.size),
    noAnchor: (value => (isValid.boolean(value) ? value : void (0)))(props.noAnchor),
  }
}

export default class Label {
  /**
   * @param {Label} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    /** @type {string} */
    this.src = validProps.src;

    /** @type {string} */
    this.pointing = validProps.pointing;

    /** @type {boolean} */
    this.corner = validProps.corner;

    /** @type {boolean} */
    this.tagged = validProps.tagged;

    /** @type {string | boolean} */
    this.ribbon = validProps.ribbon;

    /** @type {string} */
    this.attached = validProps.attached;

    /** @type {boolean} */
    this.horizontal = validProps.horizontal;

    /** @type {boolean} */
    this.floating = validProps.floating;

    /** @type {string} */
    this.detail = validProps.detail;

    /** @type {string} */
    this.icon = validProps.icon;

    /** @type {string} */
    this.iconRight = validProps.iconRight;

    /** @type {string | boolean} */
    this.circular = validProps.circular;

    /** @type {boolean} */
    this.basic = validProps.basic;

    /** @type {string} */
    this.size = validProps.size;

    /** @type {string} */
    this.color = validProps.color;

    /** @type {boolean} */
    this.noAnchor = validProps.noAnchor;
  }
}

export class LabelGroup {
  /**
   * @param {LabelGroup} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    /** @type {string} */
    this.size = validProps.size;

    /** @type {string} */
    this.color = validProps.color;

    /** @type {boolean} */
    this.tagged = validProps.tagged;

    /** @type {string | boolean} */
    this.circular = validProps.circular;
  }
}
