<script>
import { CreateElement } from 'vue'

export default {
  name: 'su-summary',

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    return createElement(
      'div',
      {
        class: 'summary'
      },
      [ this.$slots.default ]
    )
  }
}
</script>
