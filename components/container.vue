<script>
import { CreateElement } from 'vue'
import Container from './container'
import SuSegment from './segment.vue'
import SuGrid from './grid.vue'

export default {
  name: 'su-container',

  props: {
    text: Boolean,
    fluid: Boolean,

    segment: Object,
    grid: Object,

    aligned: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = '',
      element = 'div',
      container = new Container(this.$props),
      props = null;

    if(container.grid)  {
      element = SuGrid;
      props = container.grid;
    } else if(container.segment)  {
      element = SuSegment;
      props = container.segment;
    } else {
      className = 'ui';
    }

    if(container.text)  className += ' text'
    if(container.fluid)  className += ' fluid'
    if(container.aligned)  className += ` ${container.aligned}`

    className += ' container';

    return createElement(
      element,
      {
        class: className,
        props: props
      },
      [ this.$slots.default ]
    )
  }
}
</script>
