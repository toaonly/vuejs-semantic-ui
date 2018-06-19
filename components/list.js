import { isValid } from './util'

let get = {
  divided: (value) => isValid.boolean(value) ? value : void(0),
  bulleted: (value) => isValid.boolean(value) ? value : void(0),
  horizontal: (value) => isValid.boolean(value) ? value : void(0),
  ordered: (value) => isValid.boolean(value) ? value : void(0),
  link: (value) => isValid.boolean(value) ? value : void(0),
  inverted: (value) => isValid.boolean(value) ? value : void(0),
  selection: (value) => isValid.boolean(value) ? value : void(0),
  animated: (value) => isValid.boolean(value) ? value : void(0),
  celled: (value) => isValid.boolean(value) ? value : void(0),

  relaxed: (value) => {
    if (isValid.boolean(value) && value === true) return `relaxed`;
    if(isValid.string(value)) return `${value} relaxed`;

    return void(0);
  },

  aligned: (value) => isValid.string(value) ? value : void(0),
  floated: (value) => isValid.string(value) ? value : void(0),
  size: (value) => isValid.string(value) ? value : void(0),
}

export default class List {
  constructor({
    divided,
    bulleted,
    horizontal,
    ordered,
    link,
    inverted,
    selection,
    animated,
    celled,

    relaxed,

    floated,
    aligned,
    size
  }) {
    this.divided = get.divided(divided);
    this.bulleted = get.bulleted(bulleted);
    this.horizontal = get.horizontal(horizontal);
    this.ordered = get.ordered(ordered);
    this.link = get.link(link);
    this.inverted = get.inverted(inverted);
    this.selection = get.selection(selection);
    this.animated = get.animated(animated);
    this.celled = get.celled(celled);

    this.relaxed = get.relaxed(relaxed);

    this.floated = get.floated(floated);
    this.aligned = get.aligned(aligned);
    this.size = get.size(size);
  }
}
