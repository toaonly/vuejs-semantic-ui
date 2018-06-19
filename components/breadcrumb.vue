<script>
import { CreateElement } from 'vue'
import Breadcrumb from './breadcrumb'

export default {
  name: 'su-breadcrumb',

  props: {
    size: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'ui breadcrumb',
      breadcrumb = new Breadcrumb(this.$props),
      children = [ this.$slots.default ];

    if(breadcrumb.size) className += ` ${breadcrumb.size}`

    return createElement(
      'div',
      {
        class: className
      },
      children
    )
  }
}
</script>
