<script>
import { CreateElement } from 'vue'

export default {
  name: 'su-content-description',

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
