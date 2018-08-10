import { isValid } from './util'

/**
 * @param {Meta} props
 */
let validateProps = (props) => {
  return {
    /** @type {string} */
    floated: (value => {
      if(isValid.string(value)) return `${value} floated`;

      return void 0;
    })(props.floated)
  }
}

export default class Meta {
  /**
   * @param {Meta} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    this.floated = validProps.floated;
  }

  /**
   * Generate Class name
   *
   * @param {Meta} meta
   */
  static generateClassName(meta)  {
    let className = '';

    if(meta.floated) className += `${meta.floated} `;

    className += `meta`;

    return className;
  }
}
