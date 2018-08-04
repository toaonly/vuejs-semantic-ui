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
    fitted: [ Boolean, String ],
    disabled: Boolean,
    right: Boolean,

    icon: String,
    image: String,
    color: String,

    value: [ String, Number, Boolean ],

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
      default: 'active'
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
   * @param {CreateElement} h
   */
  render(h)  {
    /** @type {string} */
    let parentNodeName = this.$parent.$props.tag;

    /** @type {string} */
    let parentComponentName = this.$parent.$vnode.componentOptions.tag;

    let element = parentNodeName === 'ul' || parentNodeName === 'ol' ? 'li' : this.element || this.tag || 'div';

    let item = new Item(this.$props),
      className = '',
      children = [];

    if(item.active) className += `active `
    if(item.header) className += `header `
    if(item.link) className += `link `
    if(item.fitted) className += `${item.fitted} `
    if(item.disabled) className += `disabled `
    if(item.right) className += `right `

    if(item.icon) {
      children.push(h(SuIcon, { props: { name: item.icon } }));
    }

    if(item.image)  {
      children.push(h(SuImage, { props: { src: item.image } }));
    }

    if(item.color) className += `${item.color} `

    className += `item`;

    switch(parentComponentName) {
      case 'su-item':
        className = className.replace('item', '');
        break;
    }

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
        element,
        {
          class: className,
          on: {
            click: (e) => { this.eventHandler(e, 'click'); }
          },
          attrs: {
            'data-value': this.value
          }
        },
        children
      );
  }
}
</script>
