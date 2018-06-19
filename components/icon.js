import { isValid } from './util'

let hasName = (value) => {
  if (isValid.string(value)) return value;

  if (isValid.array(value)) return value.join(' ');

  return void (0);
}

let hasDisabled = (value) => isValid.boolean(value) ? value : void (0)
let hasLoading = (value) => isValid.boolean(value) ? value : void (0)
let hasFitted = (value) => isValid.boolean(value) ? value : void (0)
let hasLink = (value) => isValid.boolean(value) ? value : void (0)
let hasCircular = (value) => isValid.boolean(value) ? value : void (0)
let hasInverted = (value) => isValid.boolean(value) ? value : void (0)
let hasBordered = (value) => isValid.boolean(value) ? value : void (0)

let hasFlipped = (value) => {
  if (isValid.string(value)) return `${value} flipped`;

  if (isValid.boolean(value) && value === true) return `flipped`;

  return void (0);
}
let hasRotated = (value) => {
  if (isValid.string(value)) return `${value} rotated`;

  if (isValid.boolean(value) && value === true) return `rotated`;

  return void (0);
}
let hasCorner = (value) => {
  if (isValid.string(value)) return `${value} corner`;

  if (isValid.boolean(value) && value === true) return `corner`;

  return void (0);
}

let hasColor = (value) => isValid.string(value) ? value : void (0)
let hasSize = (value) => isValid.string(value) ? value : void (0)

export default class Icon {
  constructor({
    name,

    disabled,
    loading,
    fitted,
    link,
    circular,
    inverted,
    bordered,
    corner,

    flipped,
    rotated,

    size,
    color
  }) {
    this.name = hasName(name);

    this.disabled = hasDisabled(disabled);
    this.loading = hasLoading(loading);
    this.fitted = hasFitted(fitted);
    this.link = hasLink(link);
    this.flipped = hasFlipped(flipped);
    this.rotated = hasRotated(rotated);
    this.circular = hasCircular(circular);
    this.inverted = hasInverted(inverted);
    this.bordered = hasBordered(bordered);
    this.corner = hasCorner(corner);

    this.size = hasSize(size);
    this.color = hasColor(color);
  }
}

export class IconGroup {
  constructor({
    size
  }) {
    this.size = hasSize(size);
  }
}
