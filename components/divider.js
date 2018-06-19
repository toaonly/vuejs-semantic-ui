import { isValid } from './util'

let getVertical = (value) => isValid.boolean(value) ? value : void(0)
let getHorizontal = (value) => isValid.boolean(value) ? value : void(0)
let getHeader = (value) => isValid.boolean(value) ? value : void(0)
let getIcon = (value) => isValid.string(value) ? value : void(0)
let getFitted = (value) => isValid.boolean(value) ? value : void(0)
let getHidden = (value) => isValid.boolean(value) ? value : void(0)
let getSection = (value) => isValid.boolean(value) ? value : void(0)
let getClearing = (value) => isValid.boolean(value) ? value : void(0)
let getInverted = (value) => isValid.boolean(value) ? value : void(0)

export default class Divider {
  constructor({
    vertical,
    horizontal,
    header,
    icon,
    iconRight,
    fitted,
    hidden,
    section,
    clearing,
    inverted,
  }) {
    this.vertical = getVertical(vertical);
    this.horizontal = getHorizontal(horizontal);
    this.header = getHeader(header);
    this.icon = getIcon(icon);
    this.iconRight = getIcon(iconRight);
    this.fitted = getFitted(fitted);
    this.hidden = getHidden(hidden);
    this.section = getSection(section);
    this.clearing = getClearing(clearing);
    this.inverted = getInverted(inverted);
  }
}
