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

    icon: String,

    to: [ String, Object ],
    replace: {
      type: Boolean,
      default: false
    },
    append: {
      type: Boolean,
      default: false
    },
    activeClass: {
      type: String,
      default: 'router-link-active'
    },
    exact: {
      type: Boolean,
      default: false
    },
    event: {
      type: [ String, Array ],
      default: () => 'click'
    },
    exactActiveClass: {
      type: String,
      default: 'router-link-exact-active'
    },
  },

  methods: {
    eventHandler(e, name)  {
      this.$emit(name, e);
    }
  },

  /**
   * @param {CreateElement} createElement
   */
  render(h)  {
    let item = new Item(this.$props),
      className = '',
      children = [];

    if(item.active) className += `active `
    if(item.header) className += `header `
    if(item.link) className += `link `

    if(item.icon) {
      children.push(h(SuIcon, { props: { name: item.icon } }));
    }

    className += `item`

    children.push(this.$slots.default);

    return this.to ? (
        <router-link class={className}
          to={this.to}
          replace={this.replace}
          append={this.append}
          active-class={this.activeClass}
          exact={this.exact}
          event={this.event}
          exact-active-class={this.exactActiveClass}>
          {children.map(child => child)}
        </router-link>
      ) : h(
        this.element || this.tag || 'div',
        {
          class: className,
          on: {
            click: (e) => { this.eventHandler(e, 'click') }
          }
        },
        children
      );
  }
}
</script>
