<script>
import { CreateElement, RenderContext } from 'vue'

export default {
  name: 'su-flag',

  props: {
    name: String
  },

  /**
   * @param {CreateElement} createElement
   * @param {RenderContext<Props>} hack
   */
  render(createElement, hack) {
    return createElement(
      'i',
      { class: `${this.name} flag` },
    )
  }
}
</script>
