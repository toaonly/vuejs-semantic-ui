import { isValid, convertNumberToWord } from './util'

/**
 * @param {Table | , TableRow, TableHeadBodyFoot | TableRow | TableHeadBodyFooter} props
 */
let validateProps = (props) => {
  return {
    /** @type {boolean} */
    celled: (value => isValid.boolean(value) ? value : void 0)(props.celled),

    /** @type {boolean} */
    striped: (value => isValid.boolean(value) ? value : void 0)(props.striped),

    /** @type {boolean} */
    definition: (value => isValid.boolean(value) ? value : void 0)(props.definition),

    /** @type {boolean} */
    structured: (value => isValid.boolean(value) ? value : void 0)(props.structured),

    /** @type {boolean} */
    singleLine: (value => isValid.boolean(value) ? value : void 0)(props.singleLine),

    /** @type {boolean} */
    fixed: (value => isValid.boolean(value) ? value : void 0)(props.fixed),

    /** @type {boolean} */
    unstackable: (value => isValid.boolean(value) ? value : void 0)(props.unstackable),

    /** @type {boolean} */
    selectable: (value => isValid.boolean(value) ? value : void 0)(props.selectable),

    /** @type {boolean} */
    inverted: (value => isValid.boolean(value) ? value : void 0)(props.inverted),

    /** @type {boolean} */
    collapsing: (value => isValid.boolean(value) ? value : void 0)(props.collapsing),

    /** @type {boolean} */
    sortable: (value => isValid.boolean(value) ? value : void 0)(props.sortable),

    padded: (value => {
      if(value === true)  return 'padded';
      if(isValid.string(value) && value === 'very') return 'very padded';
      return void 0;
    })(props.padded),

    compact: (value => {
      if(value === true)  return 'compact';
      if(isValid.string(value) && value === 'very') return 'very compact';
      return void 0;
    })(props.compact),

    basic: (value => {
      if(value === true)  return 'basic';
      if(isValid.string(value) && value === 'very') return 'very basic';
      return void 0;
    })(props.basic),

    column: (value => {
      if (isValid.string(value)) {
        let numValue = Number(value);

        if (isNaN(numValue)) {
          return value + ' column';
        } else {
          value = numValue;
        }
      }

      if (isValid.number(value)) {
        return convertNumberToWord(value) + ' column';
      }

      return void 0;
    })(props.column),

    /** @type {string} */
    color: (value => isValid.string(value) ? value : void 0)(props.color),

    /** @type {string} */
    size: (value => isValid.string(value) ? value : void 0)(props.size),

    /** @type {boolean} */
    positive: (value => isValid.boolean(value) ? value : void 0)(props.positive),

    /** @type {boolean} */
    negative: (value => isValid.boolean(value) ? value : void 0)(props.negative),

    /** @type {boolean} */
    error: (value => isValid.boolean(value) ? value : void 0)(props.error),

    /** @type {boolean} */
    warning: (value => isValid.boolean(value) ? value : void 0)(props.warning),

    /** @type {boolean} */
    disabled: (value => isValid.boolean(value) ? value : void 0)(props.disabled),

    /** @type {boolean} */
    selectable: (value => isValid.boolean(value) ? value : void 0)(props.selectable),

    /** @type {boolean} */
    collapsing: (value => isValid.boolean(value) ? value : void 0)(props.collapsing),

    /** @type {string} */
    verticalAlign: (value => isValid.string(value) ? value : void 0)(props.verticalAlign),

    /** @type {string} */
    textAlign: (value => isValid.string(value) ? value : void 0)(props.textAlign),

    width: (value => {
      if (isValid.string(value)) {
        let numValue = Number(value);

        if (isNaN(numValue)) {
          return value + ' wide';
        } else {
          value = numValue;
        }
      }

      if (isValid.number(value)) {
        return convertNumberToWord(value) + ' wide';
      }

      return void 0;
    })(props.width),

    /** @type {boolean} */
    fullWidth: (value => isValid.boolean(value) ? value : void 0)(props.fullWidth)
  }
}

export default class Table {
  /**
   * @param {Table} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    /** @type {boolean} */
    this.celled = validProps.celled;

    /** @type {boolean} */
    this.padded = validProps.padded;

    /** @type {boolean} */
    this.striped = validProps.striped;

    /** @type {boolean} */
    this.definition = validProps.definition;

    /** @type {boolean} */
    this.compact = validProps.compact;

    /** @type {boolean} */
    this.structured = validProps.structured;

    /** @type {boolean} */
    this.singleLine = validProps.singleLine;

    /** @type {boolean} */
    this.fixed = validProps.fixed;

    /** @type {boolean} */
    this.unstackable = validProps.unstackable;

    /** @type {boolean} */
    this.selectable = validProps.selectable;

    /** @type {boolean} */
    this.inverted = validProps.inverted;

    /** @type {boolean} */
    this.collapsing = validProps.collapsing;

    /** @type {boolean} */
    this.sortable = validProps.sortable;


    /** @type {boolean | string} */
    this.basic = validProps.basic;


    /** @type {string | number} */
    this.column = validProps.column;


    /** @type {string} */
    this.color = validProps.color;

    /** @type {string} */
    this.size = validProps.size;
  }
}

class TableCell {
  /**
   * @param {TableCell} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    /** @type {boolean} */
    this.positive = validProps.positive;

    /** @type {boolean} */
    this.negative = validProps.negative;

    /** @type {boolean} */
    this.error = validProps.error;

    /** @type {boolean} */
    this.warning = validProps.warning;

    /** @type {boolean} */
    this.disabled = validProps.disabled;

    /** @type {boolean} */
    this.selectable = validProps.selectable;

    /** @type {boolean} */
    this.collapsing = validProps.collapsing;

    /** @type {string} */
    this.verticalAlign = validProps.verticalAlign;

    /** @type {string} */
    this.textAlign = validProps.textAlign;

    /** @type {string | number} */
    this.width = validProps.width;
  }
}

class TableRow {
  /**
   * @param {TableRow} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    /** @type {boolean} */
    this.positive = validProps.positive;

    /** @type {boolean} */
    this.negative = validProps.negative;

    /** @type {boolean} */
    this.error = validProps.error;

    /** @type {boolean} */
    this.warning = validProps.warning;

    /** @type {boolean} */
    this.disabled = validProps.disabled;


    /** @type {string} */
    this.verticalAlign = validProps.verticalAlign;

    /** @type {string} */
    this.textAlign = validProps.textAlign;
  }
}

class TableHeadBodyFoot {
  /**
   * @param {TableHeadBodyFoot} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    /** @type {boolean} */
    this.fullWidth = validProps.fullWidth;
  }
}

export { TableCell, TableRow, TableHeadBodyFoot }
