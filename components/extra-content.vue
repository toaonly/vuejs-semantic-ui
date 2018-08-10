<script>
import { CreateElement } from 'vue'

export default {
  name: 'su-extra-content',

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    return createElement(
      'div',
      {
        class: 'extra content'
      },
      [ this.$slots.default ]
    )
  }
}
</script>
