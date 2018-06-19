import { isValid } from './util'

let get = {
  active: value => (isValid.boolean(value) ? value : void 0),

  size: value => (isValid.string(value) ? value : void 0),
  icon: value => (isValid.string(value) ? value : void 0)
};

class Breadcrumb {
  constructor({
    size
  }) {
    this.size = get.size(size);
  }
}

class Section {
  constructor({
    active
  }) {
    this.active = get.active(active);
  }
}

class Divider {
  constructor({
    icon
  }) {
    this.icon = get.icon(icon);
  }
}

export default Breadcrumb;

export { Section, Divider };
