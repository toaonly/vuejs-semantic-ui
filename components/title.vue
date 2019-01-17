<script>
import { CreateElement } from 'vue'
import Title from './title'
import SuIcon from './icon.vue'

export default {
  name: 'su-title',

  props: {
    active: Boolean,

    icon: {
      type: String,
      required: false,
      default: 'dropdown'
    }
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = '',
      title = new Title(this.$props),
      children = [];

    if(title.active) className += 'active '
    if(title.icon)  {
      children.push(createElement(SuIcon, { props: { name: title.icon } }));
    }

    className += 'title'
    children.push(this.$slots.default);

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
