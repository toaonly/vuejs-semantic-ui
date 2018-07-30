import { isValid, isValidProp } from './util'

let getAnimated = (value) => {
  if (isValid.boolean(value) || isValid.string(value))  {
    if(value === false) return void(0);
    if(value === true)  return 'animated';

    return `${value} animated`;
  }

  return void (0);
}
let getAnimatedHiddenContent = (value) => (isValid.string(value) ? value : void(0))
let getAnimatedHiddenIcon = (value) => (isValid.string(value) ? value : void(0))
let getLabeled = (value) => (isValid.boolean (value) ? value : void(0))
let getAttached = (value) => (isValid.string (value) ? value : void(0))

let getIcon = (value) => (isValid.string(value) || isValid.boolean(value) ? value : void(0))
let getIconRight = (value) => (isValid.string(value) ? value : void(0))
let getBasic = (value) => (isValid.boolean(value) ? value : void(0))
let getInverted = (value) => (isValid.boolean(value) ? value : void(0))

let getActive = (value) => (isValid.boolean(value) ? value : void(0))
let getDisabled = (value) => (isValid.boolean(value) ? value : void(0))
let getLoading = (value) => (isValid.boolean(value) ? value : void(0))
let getToggle = (value) => (isValid.boolean(value) ? value : void(0))
let getFluid = (value) => (isValid.boolean(value) ? value : void(0))
let getCircular = (value) => (isValid.boolean(value) ? value : void(0))
let getPrimary = (value) => (isValid.boolean(value) ? value : void(0))

let getColor = (value) => (isValid.string(value) ? value : void(0))
let getSize = (value) => (isValid.string(value) ? value : void(0))
let getFloated = (value) => (isValid.string(value) ? value : void(0))
let getCompact = (value) => (isValid.boolean(value) ? value : void(0))

let getTabindex = (value) => (isValid.string(value) || isValid.number(value) ? value : void(0));

let getCondition = (value) => (isValid.boolean(value) ? value : void(0))
let getVertical = (value) => (isValid.boolean(value) ? value : void(0))
let getColumn = (value) => {
  if(isValid.number(Number(value))) {
    switch (Number(value)) {
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';
      case 10: return 'ten';
      case 11: return 'eleven';
      case 12: return 'twelve';
    }
  }

  if (isValid.string(value))  return value;

  return void(0);
}

export default class Button {
  constructor({
    animated,
    animatedHiddenContent,
    animatedHiddenIcon,
    labeled,
    attached,

    icon,
    iconRight,
    basic,
    inverted,

    active,
    disabled,
    loading,
    toggle,
    fluid,
    circular,
    primary,

    color,
    size,
    floated,
    compact,
    tabindex,
  }) {
    /** @type {string} */
    this.animated = getAnimated(animated);

    /** @type {string} */
    this.animatedHiddenContent = getAnimatedHiddenContent(animatedHiddenContent);

    /** @type {string} */
    this.animatedHiddenIcon = getAnimatedHiddenIcon(animatedHiddenIcon);

    /** @type {boolean} */
    this.labeled = getLabeled(labeled);

    /** @type {string} */
    this.attached = getAttached(attached);

    /** @type {string} */
    this.icon = getIcon(icon);

    /** @type {string} */
    this.iconRight = getIconRight(iconRight);

    /** @type {boolean} */
    this.basic = getBasic(basic);

    /** @type {boolean} */
    this.inverted = getInverted(inverted);

    this.active = getActive(active);
    this.disabled = getDisabled(disabled);
    this.loading = getLoading(loading);
    this.toggle = getToggle(toggle);
    this.fluid = getFluid(fluid);
    this.circular = getCircular(circular);
    this.primary = getPrimary(primary);

    this.color = getColor(color);
    this.size = getSize(size);
    this.floated = getFloated(floated);
    this.compact = getCompact(compact);

    this.tabindex = getTabindex(tabindex);
  }
}

export class ButtonGroup {
  constructor({
    icon,
    condition,
    vertical,
    labeled,
    column,
    color,
    basic,
    size,
    attached
  }) {
    this.icon = getIcon(icon);
    this.condition = getCondition(condition);
    this.vertical = getVertical(vertical);
    this.labeled = getLabeled(labeled);
    this.column = getColumn(column);
    this.color = getColor(color);
    this.basic = getBasic(basic);
    this.size = getSize(size);
    this.attached = getAttached(attached);
  }
}
