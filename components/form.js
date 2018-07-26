import { isValid } from './util'
import Segment from './segment'

let setFormValues = (props = {
  loading,
  success,
  error,
  warning,
  equalWidth,
  inverted,

  size,

  segment
}) => {
  return {
    /** @type {boolean} */
    loading: (value => (isValid.boolean(value) ? value : void 0))(props.loading),

    /** @type {boolean} */
    success: (value => (isValid.boolean(value) ? value : void 0))(props.success),

    /** @type {boolean} */
    error: (value => (isValid.boolean(value) ? value : void 0))(props.error),

    /** @type {boolean} */
    warning: (value => (isValid.boolean(value) ? value : void 0))(props.warning),

    /** @type {boolean} */
    equalWidth: (value => (isValid.boolean(value) ? value : void 0))(props.equalWidth),

    /** @type {boolean} */
    inverted: (value => (isValid.boolean(value) ? value : void 0))(props.inverted),


    /** @type {string} */
    size: (value => (isValid.string(value) ? value : void 0))(props.size),


    /** @type {boolean | Segment} */
    segment: (value => {
      if(value === true)  return {};
      if(isValid.object(value)) return value;

      return void(0);
    })(props.segment)
  };
};

class Form {
  constructor(props = {
    loading,
    success,
    error,
    warning,
    equalWidth,
    inverted,

    size,

    segment
  }) {
    let _props = setFormValues(props);

    this.loading = _props.loading;
    this.success = _props.success;
    this.error = _props.error;
    this.warning = _props.warning;
    this.equalWidth = _props.equalWidth;
    this.inverted = _props.inverted;

    this.size = _props.size;

    this.segment = _props.segment;
  }
}

export default Form;
