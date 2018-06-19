import { isValid } from './util'

let get = {
  active: (value) => isValid.boolean(value) ? value : void(0),

  icon: (value) => isValid.string(value) ? value : void(0),
  aligned: (value) => isValid.string(value) ? value : void(0),
  floated: (value) => isValid.string(value) ? value : void(0),
}

class Item {
  constructor({
    active,

    icon
  }) {
    this.active = get.active(active);

    this.icon = get.icon(icon);
  }
}

class ItemContent {
  constructor({
    aligned,
    floated
  }) {
    this.aligned = get.aligned(aligned);
    this.floated = get.floated(floated);
  }
}

class ItemHeader {
  constructor({

  }) {

  }
}

class ItemDescription {
  constructor({

  }) {

  }
}

export {
  Item,
  ItemContent,
  ItemHeader,
  ItemDescription,
}
