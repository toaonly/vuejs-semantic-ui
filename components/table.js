import { isValid, convertNumberToWord } from './util'

/**
 * @param {Table} props
 */
let validateProps = (props) => {
  return {
    celled: (value => isValid.boolean(value) ? value : void 0)(props.celled),

    padded: (value => isValid.boolean(value) ? value : void 0)(props.padded),

    striped: (value => isValid.boolean(value) ? value : void 0)(props.striped),

    definition: (value => isValid.boolean(value) ? value : void 0)(props.definition),

    compact: (value => isValid.boolean(value) ? value : void 0)(props.compact),

    structured: (value => isValid.boolean(value) ? value : void 0)(props.structured),

    singleLine: (value => isValid.boolean(value) ? value : void 0)(props.singleLine),

    fixed: (value => isValid.boolean(value) ? value : void 0)(props.fixed),

    unstackable: (value => isValid.boolean(value) ? value : void 0)(props.unstackable),

    selectable: (value => isValid.boolean(value) ? value : void 0)(props.selectable),

    inverted: (value => isValid.boolean(value) ? value : void 0)(props.inverted),

    collapsing: (value => isValid.boolean(value) ? value : void 0)(props.collapsing),

    sortable: (value => isValid.boolean(value) ? value : void 0)(props.sortable),

    basic: (value => {
      if(value === true)  return 'basic';
      if(isValid.string(value) && value === 'very') return 'very basic';
      return void 0;
    })(props.basic),

    column: (value => isValid.boolean(value) ? value : void 0)(props.column),

    color: (value => isValid.boolean(value) ? value : void 0)(props.color),

    size: (value => isValid.boolean(value) ? value : void 0)(props.size)
  }
}

export default class Table {
  /**
   * @param {Table} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    /** @type {boolean} */
    this.celled;

    /** @type {boolean} */
    this.padded;

    /** @type {boolean} */
    this.striped;

    /** @type {boolean} */
    this.definition;

    /** @type {boolean} */
    this.compact;

    /** @type {boolean} */
    this.structured;

    /** @type {boolean} */
    this.singleLine;

    /** @type {boolean} */
    this.fixed;

    /** @type {boolean} */
    this.unstackable;

    /** @type {boolean} */
    this.selectable;

    /** @type {boolean} */
    this.inverted;

    /** @type {boolean} */
    this.collapsing;

    /** @type {boolean} */
    this.sortable;


    /** @type {boolean | string} */
    this.basic;


    /** @type {string | number} */
    this.column;


    /** @type {string} */
    this.color;

    /** @type {string} */
    this.size;
  }
}
