<script>
import { CreateElement } from 'vue'

export default {
  name: 'su-description',

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
