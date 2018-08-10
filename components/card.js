import { isValid, convertNumberToWord } from './util'

/**
 * @param {Card | Cards} props
 */
let validateProps = (props) => {
  return {
    /** @type {boolean} */
    link: (value => isValid.boolean(value) ? value : void 0)(props.link),

    /** @type {boolean} */
    fluid: (value => isValid.boolean(value) ? value : void 0)(props.fluid),

    /** @type {boolean} */
    centered: (value => isValid.boolean(value) ? value : void 0)(props.centered),

    /** @type {boolean} */
    raised: (value => isValid.boolean(value) ? value : void 0)(props.raised),

    /** @type {boolean} */
    stackable: (value => isValid.boolean(value) ? value : void 0)(props.stackable),

    /** @type {boolean} */
    doubling: (value => isValid.boolean(value) ? value : void 0)(props.doubling),

    /** @type {string} */
    aligned: (value => {
      if(isValid.string(value)) return `${value} aligned`;

      return void 0;
    })(props.aligned),

    /** @type {string} */
    color: (value => {
      if(isValid.string(value)) return `${value}`;

      return void 0;
    })(props.color),

    /** @type {string} */
    column: (value => {
      if (isValid.string(value)) {
        let numValue = Number(value);

        if (isNaN(numValue)) {
          return value;
        } else {
          value = numValue;
        }
      }

      if (isValid.number(value)) {
        return convertNumberToWord(value);
      }

      return void 0;
    })(props.column),
  }
}

export default class Card {
  /**
   * @param {Card} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    this.fluid = validProps.fluid;
    this.centered = validProps.centered;
    this.raised = validProps.raised;
    this.link = validProps.link;

    this.aligned = validProps.aligned;
    this.color = validProps.color;
  }

  /**
   * Generate Class name
   *
   * @param {Card} card
   */
  static generateClassName(card)  {
    let className = 'ui ';

    if(card.fluid) className += `fluid `;
    if(card.centered) className += `centered `;
    if(card.raised) className += `raised `;
    if(card.link) className += `link `;

    if(card.color) className += `${card.color} `;

    className += `card`;

    return className;
  }
}

class Cards {
  /**
   * @param {Cards} props
   */
  constructor(props) {
    let validProps = validateProps(props);

    this.stackable = validProps.stackable;
    this.doubling = validProps.doubling;
    this.centered = validProps.centered;
    this.link = validProps.link;

    this.column = validProps.column;
  }

  /**
   * Generate Class name
   *
   * @param {Cards} cards
   */
  static generateClassName(cards)  {
    let className = 'ui ';

    if(cards.stackable) className += `stackable `;
    if(cards.doubling)  className += `doubling `;
    if(cards.centered)  className += `centered `;
    if(cards.link)  className += `link `;

    if(cards.column)  className += `${cards.column} `;

    className += `cards`;

    return className;
  }
}

export { Cards }
