import { isValid } from './util'

let getRaised = (value) => isValid.boolean(value) ? value : void(0)
let getStacked = (value) => {
  if (isValid.string(value) || isValid.boolean(value)) {
    if(value === false) return void(0);
    if(value === true)  return 'stacked';

    return `${value} stacked`;
  }

  return void (0);
}
let getPiled = (value) => isValid.boolean(value) ? value : void(0)
let getVertical = (value) => isValid.boolean(value) ? value : void(0)

let getDisabled = (value) => isValid.boolean(value) ? value : void(0)
let getLoading = (value) => isValid.boolean(value) ? value : void(0)

let getInverted = (value) => isValid.boolean(value) ? value : void(0)
let getAttached = (value) => {
  if (isValid.string(value) || isValid.boolean(value)) {
    if (value === false) return void (0);
    if (value === true) return 'attached';

    return `${value} attached`;
  }

  return void (0);
}
let getPadded = (value) => {
  if (isValid.string(value) || isValid.boolean(value)) {
    if (value === false) return void (0);
    if (value === true) return 'padded';

    return `${value} padded`;
  }

  return void (0);
}
let getCompact = (value) => isValid.boolean(value) ? value : void(0)
let getColor = (value) => isValid.string(value) ? value : void(0)
let getSecondary = (value) => isValid.boolean(value) ? value : void(0)
let getTertiary = (value) => isValid.boolean(value) ? value : void(0)
let getCircular = (value) => isValid.boolean(value) ? value : void(0)
let getClearing = (value) => isValid.boolean(value) ? value : void(0)
let getFloated = (value) => isValid.string(value) ? value : void(0)
let getAligned = (value) => isValid.string(value) ? value : void(0)
let getBasic = (value) => isValid.boolean(value) ? value : void(0)

let getHorizontal = (value) => isValid.boolean(value) ? value : void(0)

export default class Segment {
  constructor({
    raised,
    stacked,
    piled,
    vertical,

    disabled,
    loading,

    inverted,
    attached,
    padded,
    compact,
    color,
    secondary,
    tertiary,
    circular,
    clearing,
    floated,
    aligned,
    basic,
  }) {
    this.raised = getRaised(raised);
    this.stacked = getStacked(stacked);
    this.piled = getPiled(piled);
    this.vertical = getVertical(vertical);
    this.disabled = getDisabled(disabled);
    this.loading = getLoading(loading);
    this.inverted = getInverted(inverted);
    this.attached = getAttached(attached);
    this.padded = getPadded(padded);
    this.compact = getCompact(compact);
    this.color = getColor(color);
    this.secondary = getSecondary(secondary);
    this.tertiary = getTertiary(tertiary);
    this.circular = getCircular(circular);
    this.clearing = getClearing(clearing);
    this.floated = getFloated(floated);
    this.aligned = getAligned(aligned);
    this.basic = getBasic(basic);
  }

  generateClassName() {
    let className = 'ui ';

    if (this.raised) className += `raised `;
    if (this.stacked) className += `${this.stacked} `;
    if (this.piled) className += `piled `;
    if (this.vertical) className += `vertical `;
    if (this.disabled) className += `disabled `;
    if (this.loading) className += `loading `;
    if (this.inverted) className += `inverted `;
    if (this.attached) className += `${this.attached} `;
    if (this.padded) className += `${this.padded} `;
    if (this.compact) className += `compact `;
    if (this.color) className += `${this.color} `;
    if (this.secondary) className += `secondary `;
    if (this.tertiary) className += `tertiary `;
    if (this.circular) className += `circular `;
    if (this.clearing) className += `clearing `;
    if (this.floated) className += `${this.floated} floated `;
    if (this.aligned) className += `${this.aligned} aligned `;
    if (this.basic) className += `basic `;

    className += 'segment';

    return className;
  }
}

export class SegmentGroup {
  constructor({
    horizontal,
    raised,
    stacked,
    piled,
    compact
  }) {
    this.horizontal = getHorizontal(horizontal);
    this.raised = getRaised(raised);
    this.stacked = getStacked(stacked);
    this.piled = getPiled(piled);
    this.compact = getCompact(compact);
  }
}
