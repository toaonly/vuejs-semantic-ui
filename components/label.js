import { isValid, isValidProp } from './util'

let getSrc = (value) => (isValid.string(value) ? value : void (0))
let getColor = (value) => (isValid.string(value) ? value : void(0))
let getPointing = (value) => {
  if(isValid.string(value) || isValid.boolean(value)) {
    if(value === false) return void(0);

    let result = 'pointing';

    if(value === 'below') {
      return `${result} ${value}`;
    }

    if(value === 'left' || value === 'right') {
      return `${value} ${result}`;
    }

    return result;
  }

  return void(0);
}
let getCorner = (value) => (isValid.string(value) ? value : void(0))
let getTag = (value) => (isValid.boolean(value) ? value : void(0))
let getRibbon = (value) => {
  if ((isValid.string(value) || isValid.boolean(value))) {
    if(value === false) return void(0);
    if(value === 'right') return `${value} ribbon`;
    if(value === true)  return 'ribbon';
  }

  return void(0);
}
let getDetail = (value) => (isValid.string(value) ? value : void(0))
let getIcon = (value) => (isValid.string(value) ? value : void(0))
let getAttached = (value) => (isValid.string(value) ? value : void(0))
let getHorizontal = (value) => (isValid.boolean(value) ? value : void(0))
let getFloating = (value) => (isValid.boolean(value) ? value : void(0))
let getCircular = (value) => {
  if ((isValid.string(value) || isValid.boolean(value))) {
    if(value === false) return void(0);
    if(value === 'empty') return `${value} circular`;
    if(value === true) return `circular`;
  }

  return void(0);
}
let getBasic = (value) => (isValid.boolean(value) ? value : void(0))
let getSize = (value) => (isValid.string(value) ? value : void(0))
let getNoAnchor = (value) => (isValid.boolean(value) ? value : void(0))

export default class Label {
  constructor({
    src,
    pointing,
    corner,
    tag,
    ribbon,
    attached,
    horizontal,
    floating,
    detail,
    icon,
    iconRight,
    circular,
    basic,
    size,
    color,
    noAnchor
  }) {
    /** @type {string} */
    this.src = getSrc(src);

    /** @type {string} */
    this.pointing = getPointing(pointing);

    /** @type {boolean} */
    this.corner = getCorner(corner);

    /** @type {boolean} */
    this.tag = getTag(tag);

    /** @type {string | boolean} */
    this.ribbon = getRibbon(ribbon);

    /** @type {string} */
    this.attached = getAttached(attached);

    /** @type {boolean} */
    this.horizontal = getHorizontal(horizontal);

    /** @type {boolean} */
    this.floating = getFloating(floating);

    /** @type {string} */
    this.detail = getDetail(detail);

    /** @type {string} */
    this.icon = getIcon(icon);

    /** @type {string} */
    this.iconRight = getIcon(iconRight);

    /** @type {string | boolean} */
    this.circular = getCircular(circular);

    /** @type {boolean} */
    this.basic = getBasic(basic);

    /** @type {string} */
    this.size = getSize(size);

    /** @type {string} */
    this.color = getColor(color);

    /** @type {boolean} */
    this.noAnchor = getNoAnchor(noAnchor);
  }
}

export class LabelGroup {
  constructor({
    size,
    color,
    tag,
    circular
  }) {
    /** @type {string} */
    this.size = getSize(size);

    /** @type {string} */
    this.color = getColor(color);

    /** @type {boolean} */
    this.tag = getTag(tag);

    /** @type {string | boolean} */
    this.circular = getCircular(circular);
  }
}
