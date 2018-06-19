<script>
import { CreateElement } from 'vue'

export default {
  name: 'su-content-header',

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    return createElement(
      this.element,
      {
        class: 'header'
      },
      [ this.$slots.default ]
    )
  }
}
</script>
