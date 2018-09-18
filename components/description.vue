<script>
import { CreateElement } from 'vue'

export default {
  name: 'su-description',

  props: {
    aligned: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    return createElement(
      'div',
      {
        class: 'description'
      },
      [ this.$slots.default ]
    )
  }
}
</script>
