<script>
import { CreateElement } from 'vue'
import { Section } from './breadcrumb'

export default {
  name: 'su-breadcrumb-section',

  props: {
    active: Boolean
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let element = 'a',
      className = 'section',
      section = new Section(this.$props),
      children = [ this.$slots.default ];

    if(section.active)  {
      element = 'div';
      className += ` active`;
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
