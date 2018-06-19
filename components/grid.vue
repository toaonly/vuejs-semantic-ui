<script>
import { CreateElement } from 'vue'
import Grid from './grid'

export default {
  name: 'su-grid',

  props: {
    container: Boolean,
    internally: Boolean,
    padded: Boolean,
    equalWidth: Boolean,
    centered: Boolean,
    justified: Boolean,
    stackable: Boolean,
    computer: Boolean,
    tablet: Boolean,
    mobile: Boolean,
    divided: Boolean,
    vertically: Boolean,
    horizontally: Boolean,
    doubling: Boolean,
    reversed: Boolean,
    widescreen: Boolean,

    aligned: [ String ],
    device: [ String ],

    column: [ Number, String ],

    celled: [ Boolean, String ],
    relaxed: [ Boolean, String ]
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'ui ',
      grid = new Grid(this.$props),
      children = [ this.$slots.default ];

    className += (grid.generateClassName() + ' grid');

    return createElement(
      'div',
      {
        class: className
      },
      children
    )
  }
}
</script>
