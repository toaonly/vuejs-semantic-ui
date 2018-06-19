import { isValid } from './util'

let get = {
  fade: value => (isValid.boolean(value) ? value : void 0),
  active: value => (isValid.boolean(value) ? value : void 0),
  instant: value => (isValid.boolean(value) ? value : void 0),
  disabled: value => (isValid.boolean(value) ? value : void 0),
  image: value => (isValid.boolean(value) ? value : void 0),
  circular: value => (isValid.boolean(value) ? value : void 0),

  size: value => (isValid.string(value) ? value : void 0),

  move: (value) => {
    if (isValid.boolean(value) && value) {
      return 'move';
    }

    if (isValid.string(value)) {
      return `move ${value}`;
    }

    return void (0);
  },

  rotate: (value) => {
    if (isValid.boolean(value) && value) {
      return 'rotate';
    }

    if (isValid.string(value)) {
      return `rotate ${value}`;
    }

    return void (0);
  },
};

class Reveal {
  constructor({
    fade,
    active,
    instant,
    disabled,
    image,
    circular,

    size,

    move,
    rotate,
  }) {
    this.fade = get.fade(fade);
    this.active = get.active(active);
    this.instant = get.instant(instant);
    this.disabled = get.disabled(disabled);
    this.image = get.image(image);
    this.circular = get.circular(circular);

    this.size = get.size(size);

    this.move = get.move(move);
    this.rotate = get.rotate(rotate);
  }
}

export default Reveal;
