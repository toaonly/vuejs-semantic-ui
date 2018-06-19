import { isValid } from './util'
import Segment from './segment'
import Grid from './grid'

let validateProps = (
  props = {
    /** @type {boolean} */
    text,

    /** @type {boolean} */
    fluid,

    /** @type {Segment} */
    segment,

    /** @type {Grid} */
    grid,

    /** @type {string} */
    aligned
  }
) => {
  return {
    text: (value => (isValid.boolean(value) ? value : void 0))(props.text),
    fluid: (value => (isValid.boolean(value) ? value : void 0))(props.fluid),

    aligned: (value => {
      if(isValid.string(value)) {
        if (value === 'justified')  return value;

        return `${value} aligned`;
      }

      return void 0;
    })(props.aligned),

    segment: (value => (isValid.object(value) ? new Segment(value) : void 0))(props.segment),

    grid: (value => (isValid.object(value) ? new Grid(value) : void 0))(props.grid),
  }
}

class Container {
  constructor(props = {
    /** @type {boolean} */
    text,

    /** @type {boolean} */
    fluid,

    /** @type {Segment} */
    segment,

    /** @type {Grid} */
    grid,

    /** @type {string} */
    aligned
  }) {
    let validProps = validateProps(props);

    this.text = validProps.text;
    this.fluid = validProps.fluid;

    this.segment = validProps.segment;
    this.grid = validProps.grid;

    this.aligned = validProps.aligned;
  }
}

export default Container
