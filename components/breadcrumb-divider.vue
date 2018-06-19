<script>
import { CreateElement } from 'vue'
import { Divider } from './breadcrumb'

export default {
  name: 'su-breadcrumb-divider',

  props: {
    icon: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let element = 'div',
      className = 'divider',
      divider = new Divider(this.$props),
      children = [ this.$slots.default ];

    if(divider.icon)  {
      element = 'i';
      className += ` ${divider.icon} icon`;
    }

    return createElement(
      element,
      {
        class: className
      },
      children
    )
  }
}
</script>
