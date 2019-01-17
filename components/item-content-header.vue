<script>
import { CreateElement } from 'vue'

export default {
  name: 'su-content-header',

  props: {
    tag: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    return createElement(
      this.tag || 'div',
      {
        class: 'header'
      },
      [ this.$slots.default ]
    )
  }
}
</script>
