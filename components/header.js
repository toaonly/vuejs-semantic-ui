import { isValid } from './util'

let getIcon = (value) => isValid.string(value) ? value : void(0)
let getSub = (value) => isValid.boolean(value) ? value : void(0)
let getDisabled = (value) => isValid.boolean(value) ? value : void(0)
let getDividing = (value) => isValid.boolean(value) ? value : void(0)
let getBlock = (value) => isValid.boolean(value) ? value : void(0)
let getAttached = (value) => {
  if (isValid.string(value) || isValid.boolean(value)) {
    if (value === false) return void (0);
    if (value === true) return 'attached';

    return `${value} attached`;
  }

  return void (0);
}
let getFloated = (value) => isValid.string(value) ? value : void(0)
let getAligned = (value) => {
  if (isValid.string(value))  {
    if (value === 'justified')  return value;

    return `${value} aligned`;
  }

  return void(0);
}
let getColor = (value) => isValid.string(value) ? value : void(0)
let getInverted = (value) => isValid.boolean(value) ? value : void(0)
let getSize = (value) => isValid.string(value) ? value : void(0)

export default class Header {
  constructor({
    icon,
    sub,
    disabled,
    dividing,
    block,
    attached,
    floated,
    aligned,
    color,
    inverted,
    size,
  }) {
    this.icon = getIcon(icon);
    this.sub = getSub(sub);
    this.disabled = getDisabled(disabled);
    this.dividing = getDividing(dividing);
    this.block = getBlock(block);
    this.attached = getAttached(attached);
    this.floated = getFloated(floated);
    this.aligned = getAligned(aligned);
    this.color = getColor(color);
    this.inverted = getInverted(inverted);
    this.size = getSize(size);
  }
}
