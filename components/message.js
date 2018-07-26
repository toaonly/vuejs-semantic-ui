import { isValid, convertNumberToWord } from './util'

let setMessageValues = (props = {
  /** @type {boolean} */
  hidden,
  visible,
  floating,
  compact,
  warning,
  info,
  positive,
  success,
  negative,
  error,
  close,

  /** @type {string} */
  icon,
  color,
  size,

  /** @type {boolean | string} */
  attached
}) => {
  return {
    /** @type {boolean} */
    hidden:   (value => (isValid.boolean(value) ? value : void 0))(props.hidden),

    /** @type {boolean} */
    visible:  (value => (isValid.boolean(value) ? value : void 0))(props.visible),

    /** @type {boolean} */
    floating: (value => (isValid.boolean(value) ? value : void 0))(props.floating),

    /** @type {boolean} */
    compact:  (value => (isValid.boolean(value) ? value : void 0))(props.compact),

    /** @type {boolean} */
    warning:  (value => (isValid.boolean(value) ? value : void 0))(props.warning),

    /** @type {boolean} */
    info:     (value => (isValid.boolean(value) ? value : void 0))(props.info),

    /** @type {boolean} */
    positive: (value => (isValid.boolean(value) ? value : void 0))(props.positive),

    /** @type {boolean} */
    success:  (value => (isValid.boolean(value) ? value : void 0))(props.success),

    /** @type {boolean} */
    negative: (value => (isValid.boolean(value) ? value : void 0))(props.negative),

    /** @type {boolean} */
    error:    (value => (isValid.boolean(value) ? value : void 0))(props.error),

    /** @type {boolean} */
    close:    (value => (isValid.boolean(value) ? value : void 0))(props.close),

    /** @type {string} */
    icon:     (value => (isValid.string(value) ? value : void 0))(props.icon),

    /** @type {string} */
    color:    (value => (isValid.string(value) ? value : void 0))(props.color),

    /** @type {string} */
    size:     (value => (isValid.string(value) ? value : void 0))(props.size),

    /** @type {string} */
    attached: ((value) => {
      if(value === true)   return `attached`;
      if(value === false)  return void(0);

      return `${value} attached`;
    })(props.attached),
  };
};

export default class Message {
  constructor(props = {
    icon,
    attached,

    hidden,
    visible,

    floating,
    compact,
    warning,
    info,
    positive,
    success,
    negative,
    error,
    close,

    color,
    size
  }) {
    let _props = setMessageValues(props);

    this.hidden   = _props.hidden;
    this.visible  = _props.visible;
    this.floating = _props.floating;
    this.compact  = _props.compact;
    this.warning  = _props.warning;
    this.info     = _props.info;
    this.positive = _props.positive;
    this.success  = _props.success;
    this.negative = _props.negative;
    this.error    = _props.error;
    this.close    = _props.close;

    this.icon     = _props.icon;
    this.color    = _props.color;
    this.size     = _props.size;

    this.attached = _props.attached;
  }
}
