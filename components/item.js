import { isValid } from './util'

/**
 * @typedef Props
 * @property {boolean} active Item Props
 * @property {boolean} header Item Props
 * @property {boolean} link Item Props

 * @property {string} icon Item Props
 * @property {string} image Item Props
 * @property {string} color Item Props
 * @property {string} aligned ItemContent Props
 * @property {string} floated ItemContent Props
 *
 * @property {boolean} divided Items Props
 * @property {boolean} unstackable Items Props
 * @property {boolean} link Items Props
 * @property {boolean} fitted Items Props
 * @property {boolean} disabled Items Props
 * @property {boolean} right Items Props
 * @property {boolean | string} relaxed Items Props
 *
 * @param {Props} props
 */
let validateProps = props => ({
  active: (value => isValid.boolean(value) ? value : void 0)(props.active),
  header: (value => isValid.boolean(value) ? value : void 0)(props.header),
  link: (value => isValid.boolean(value) ? value : void 0)(props.link),
  fitted: (value => {
    if(value === true)  return 'fitted';
    if(isValid.string(value)) return `${value} fitted`;

    return void 0;
  })(props.fitted),
  disabled: (value => isValid.boolean(value) ? value : void 0)(props.disabled),
  right: (value => isValid.boolean(value) ? value : void 0)(props.right),

  icon: (value => isValid.string(value) ? value : void 0)(props.icon),
  image: (value => isValid.string(value) ? value : void 0)(props.image),
  color: (value => isValid.string(value) ? value : void 0)(props.color),
  aligned: (value => isValid.string(value) ? value : void 0)(props.aligned),
  floated: (value => isValid.string(value) ? value : void 0)(props.floated),

  divided: (value => isValid.boolean(value) ? value : void 0)(props.divided),
  unstackable: (value => isValid.boolean(value) ? value : void 0)(props.unstackable),
  relaxed: (value => {
    if(value === true) return 'relaxed';
    if(value === 'very')  return 'very relaxed';

    return void 0;
  })(props.relaxed),
});

class Items {
  /**
   * @param {Items} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    this.divided = validProps.divided;
    this.unstackable = validProps.unstackable;
    this.link = validProps.link;
    this.relaxed = validProps.relaxed;
  }
}

class Item {
  /**
   * @param {Item} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    this.active = validProps.active;
    this.header = validProps.header;
    this.link = validProps.link;
    this.fitted = validProps.fitted;
    this.disabled = validProps.disabled;
    this.right = validProps.right;

    this.icon = validProps.icon;
    this.image = validProps.image;
    this.color = validProps.color;
  }
}

class ItemContent {
  /**
   * @param {ItemContent} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    this.aligned = validProps.aligned;
    this.floated = validProps.floated;
  }
}

class ItemContentHeader {
  constructor({

  }) {

  }
}

class ItemContentDescription {
  constructor({

  }) {

  }
}

class ItemContentExtra {
  constructor({

  }) {

  }
}

export {
  Items,
  Item,
  ItemContent,
  ItemContentHeader,
  ItemContentDescription,
  ItemContentExtra
};
