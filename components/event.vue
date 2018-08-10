<script>
import { CreateElement } from 'vue'

export default {
  name: 'su-event',

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    return createElement(
      'div',
      {
        class: 'event'
      },
      [ this.$slots.default ]
    )
  }
}
</script>
