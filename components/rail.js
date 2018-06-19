import { isValid } from './util'

let get = {
  left: value => (isValid.boolean(value) ? value : void 0),
  right: value => (isValid.boolean(value) ? value : void 0),
  internal: value => (isValid.boolean(value) ? value : void 0),
  dividing: value => (isValid.boolean(value) ? value : void 0),
  attached: value => (isValid.boolean(value) ? value : void 0),

  size: value => (isValid.string(value) ? value : void 0),

  close: (value) => {
    if (isValid.boolean(value) && value) {
      return 'close';
    }

    if (isValid.string(value)) {
      return `${value} close`;
    }

    return void (0);
  },
};

class Rail {
  constructor({
    left,
    right,
    internal,
    dividing,
    attached,

    size,

    close
  }) {
    this.left = get.left(left);
    this.right = get.right(right);
    this.internal = get.internal(internal);
    this.dividing = get.dividing(dividing);
    this.attached = get.attached(attached);

    this.size = get.size(size);

    this.close = get.close(close);
  }
}

export default Rail;
