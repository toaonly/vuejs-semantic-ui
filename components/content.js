import { isValid } from './util'

let validateProps = (props = {
  active,

  aligned,
  floated
}) => {
  return {
    /** @type {boolean} */
    active: (value => isValid.boolean(value) ? value : void(0))(props.active),

    /** @type {string} */
    aligned: (value => isValid.string(value) ? value : void(0))(props.aligned),

    /** @type {string} */
    floated: (value => isValid.string(value) ? value : void(0))(props.floated)
  }
}

class Content {
  constructor(props = {
    active,

    aligned,
    floated
  })  {
    let validProps = validateProps(props);

    /** @type {boolean} */
    this.active = validProps.active;

    /** @type {string} */
    this.aligned = validProps.aligned;

    /** @type {string} */
    this.floated = validProps.floated;
  }
}

export default Content
