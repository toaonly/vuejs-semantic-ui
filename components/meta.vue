<script>
import { CreateElement } from 'vue'
import Meta from './meta'

export default {
  name: 'su-meta',

  props: {
    floated: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    const meta = new Meta(this.$props);

    return createElement(
      'div',
      {
        class: Meta.generateClassName(meta)
      },
      [ this.$slots.default ]
    )
  }
}
</script>
