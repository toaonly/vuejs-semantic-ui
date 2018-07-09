<script>
import { CreateElement } from 'vue'

export default {
  name: 'su-content-extra',

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    return createElement(
      'div',
      {
        class: 'extra'
      },
      [ this.$slots.default ]
    )
  }
}
</script>
