import { isValid } from './util'

/**
 * @param {Feed} props
 */
let validateProps = (props) => {
  return {
    /** @type {string} */
    size: (value => {
      if(isValid.string(value)) return `${value}`;

      return void 0;
    })(props.size)
  }
}

export default class Feed {
  /**
   * @param {Feed} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    this.size = validProps.size;
  }

  /**
   * Generate Class name
   *
   * @param {Feed} feed
   */
  static generateClassName(feed)  {
    let className = 'ui ';

    if(feed.size) className += `${feed.size} `;

    className += `feed`;

    return className;
  }
}
