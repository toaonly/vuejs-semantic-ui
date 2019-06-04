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

    /** @type {boolean} */
    scrolling: (value => isValid.boolean(value) ? value : void(0))(props.scrolling),

    /** @type {boolean} */
    image: (value => isValid.boolean(value) ? value : void(0))(props.image),

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
    let validProps = validateProps(props)

    /** @type {boolean} */
    this.active = validProps.active

    /** @type {boolean} */
    this.visible = validProps.visible

    /** @type {boolean} */
    this.hidden = validProps.hidden

    /** @type {boolean} */
    this.scrolling = validProps.scrolling

    /** @type {boolean} */
    this.image = validProps.image

    /** @type {string} */
    this.aligned = validProps.aligned

    /** @type {string} */
    this.floated = validProps.floated
  }

  /**
   * Generate Content class name
   *
   * @param {Content} content
   */
  static generateClassName(content) {
    let className = ''

    if(content.active) className += `active `
    if(content.visible) className += `visible `
    if(content.hidden) className += `hidden `
    if(content.scrolling) className += `scrolling `
    if(content.image) className += `image `

    if(content.aligned) className += `${content.aligned} aligned `
    if(content.floated) className += `${content.floated} floated `

    className += 'content'

    return className
  }
}

export default Content
