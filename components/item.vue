<script>
import { CreateElement } from 'vue'
import SuIcon from './icon.vue'
import SuImage from './image.vue'
import { Item } from './item'

export default {
  name: 'su-item',

  props: {
    element: {
      type: String,
      default: 'div',
      required: false
    },

    active: Boolean,

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
      className = 'item',
      children = [];

    if(item.active) className += ` active`

    if(item.icon) {
      children.push(createElement(SuIcon, { props: { name: item.icon } }));
    }

    children.push(this.$slots.default);

    return createElement(
      this.element,
      {
        class: className
      },
      children
    )
  }
}
</script>
