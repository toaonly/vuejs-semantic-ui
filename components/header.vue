<script>
import { CreateElement, RenderContext } from 'vue'
import SuIcon from './icon.vue'
import Header from './header'

export default {
  name: 'su-header',

  props: {
    element: String,
    tag: String,

    icon: String,
    sub: Boolean,
    disabled: Boolean,
    dividing: Boolean,
    block: Boolean,
    attached: [ Boolean, String ],
    floated: String,
    aligned: String,
    color: String,
    inverted: Boolean,
    size: String
  },

  /**
   * @param {CreateElement} createElement
   * @param {RenderContext<Props>} hack
   */
  render(createElement, hack) {
    const parent = this.$parent.$vnode;

    /** @type {string} */
    const parentName = parent.componentOptions.tag;

    let className = 'ui',
      element = (this.element || this.tag) ? this.element || this.tag : 'div',
      header = new Header(this.$props),
      children = [];

    switch(parentName) {
      case 'su-header':
      case 'su-message':
      case 'su-modal':
      case 'su-card':
        className = className.replace('ui', '');
        break;
      case 'su-content':
        const grandParent = this.$parent.$parent;

        if(!grandParent.$vnode.tag.match('su-dimmer')) {
          className = className.replace('ui', '');
        } else {
          if(!grandParent.$props.inverted) {
            header.inverted = true;
          }
        }

        break;
    }

    if(header.size)  className += ` ${header.size}`;
    if(header.icon) {
      className += ` icon`;
      children.push(createElement(SuIcon, { props: { name: header.icon } }));
    }
    if(header.sub) className += ` sub`;
    if(header.disabled)  className += ` disabled`;
    if(header.dividing)  className += ` dividing`;
    if(header.block)  className += ` block`;
    if(header.attached)  className += ` ${header.attached}`;
    if(header.floated) className += ` ${header.floated} floated`;
    if(header.aligned) className += ` ${header.aligned}`;
    if(header.color) className += ` ${header.color}`;
    if(header.inverted)  className += ` inverted`;
    if(header.size) className += ` ${header.size}`;

    className += ` header`;

    children.push(this.$slots.default);

    return createElement(
      element,
      {
        class: className
      },
      children
    );
  }
}
</script>
