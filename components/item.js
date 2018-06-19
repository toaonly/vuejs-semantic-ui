import { isValid } from './util'

/**
 * @typedef Props
 * @property {boolean} active Item Props
 * @property {boolean} header Item Props
 * @property {boolean} link Item Props
 * @property {string} icon Item Props
 *
 * @property {string} aligned ItemContent Props
 * @property {string} floated ItemContent Props
 *
 * @property {boolean} divided Items Props
 * @property {boolean} unstackable Items Props
 * @property {boolean} link Items Props
 * @property {boolean | string} relaxed Items Props
 *
 * @param {Props} props
 */
let validateProps = props => ({
  active: (value => isValid.boolean(value) ? value : void 0)(props.active),
  header: (value => isValid.boolean(value) ? value : void 0)(props.header),
  link: (value => isValid.boolean(value) ? value : void 0)(props.link),

  icon: (value => isValid.string(value) ? value : void 0)(props.icon),
  aligned: (value => isValid.string(value) ? value : void 0)(props.aligned),
  floated: (value => isValid.string(value) ? value : void 0)(props.floated),

  divided: (value => isValid.boolean(value) ? value : void 0)(props.divided),
  unstackable: (value => isValid.boolean(value) ? value : void 0)(props.unstackable),
  link: (value => isValid.boolean(value) ? value : void 0)(props.link),
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

    this.icon = validProps.icon;
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
