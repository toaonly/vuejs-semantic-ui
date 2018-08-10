import { isValid } from './util'

/**
 * @param {Content} props
 */
let validateProps = (props) => {
  return {
    /** @type {boolean} */
    active: (value => isValid.boolean(value) ? value : void(0))(props.active),

    /** @type {boolean} */
    visible: (value => isValid.boolean(value) ? value : void(0))(props.visible),

    /** @type {boolean} */
    hidden: (value => isValid.boolean(value) ? value : void(0))(props.hidden),

    /** @type {string} */
    aligned: (value => isValid.string(value) ? value : void(0))(props.aligned),

    /** @type {string} */
    floated: (value => isValid.string(value) ? value : void(0))(props.floated)
  }
}

class Content {
  /**
   * @param {Content} props
   */
  constructor(props)  {
    let validProps = validateProps(props);

    /** @type {boolean} */
    this.active = validProps.active;

    /** @type {boolean} */
    this.visible = validProps.visible;

    /** @type {boolean} */
    this.hidden = validProps.hidden;

    /** @type {string} */
    this.aligned = validProps.aligned;

    /** @type {string} */
    this.floated = validProps.floated;
  }
}

export default Content
