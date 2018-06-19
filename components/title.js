import { isValid } from './util'

let validateProps = (props = {
  active,

  icon
}) => {
  return {
    /** @type {boolean} */
    active: (value => isValid.boolean(value) ? value : void(0))(props.active),

    /** @type {string} */
    icon: (value => isValid.string(value) ? value : void(0))(props.icon)
  }
}

class Title {
  constructor(props = {
    active,

    icon
  })  {
    let validProps = validateProps(props);

    /** @type {boolean} */
    this.active = validProps.active;

    /** @type {string} */
    this.icon = validProps.icon;
  }
}

export default Title
