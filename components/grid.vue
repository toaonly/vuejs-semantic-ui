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
    stretched: Boolean,

    aligned: [ String ],
    device: [ String ],

    column: [ Number, String ],

    celled: [ Boolean, String ],
    relaxed: [ Boolean, String ],

    segment: [ Boolean, Object ]
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let grid = new Grid(this.$props),
      children = [ this.$slots.default ];

    return createElement(
      'div',
      {
        class: grid.generateClassName()
      },
      children
    )
  }
}
</script>
