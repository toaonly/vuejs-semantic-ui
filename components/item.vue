<script>
import { CreateElement } from 'vue'
import SuIcon from './icon.vue'
import SuImage from './image.vue'
import { Item } from './item'

export default {
  name: 'su-item',

  props: {
    element: String,
    tag: String,

    active: Boolean,
    header: Boolean,
    link: Boolean,

    icon: String
  },

  methods: {
    eventHandler(e, name)  {
      this.$emit(name, e);
    }
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let item = new Item(this.$props),
      className = '',
      children = [];

    if(item.active) className += `active `
    if(item.header) className += `header `
    if(item.link) className += `link `

    if(item.icon) {
      children.push(createElement(SuIcon, { props: { name: item.icon } }));
    }

    children.push(this.$slots.default);

    className += `item`;

    return createElement(
      this.element || this.tag || 'div',
      {
        class: className
      },
      children
    )
  }
}
</script>
