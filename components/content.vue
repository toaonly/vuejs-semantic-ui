<script>
import { CreateElement } from 'vue'
import Content from './content'

export default {
  name: 'su-content',

  props: {
    active: Boolean,
    visible: Boolean,
    hidden: Boolean,

    aligned: String,
    floated: String,

    src: String,
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    /** @type {string} */
    const parentComponentName = this.$parent.$vnode.componentOptions.tag;

    let element = 'div',
      className = '',
      content = new Content(this.$props),
      src;

    if(content.active) className += `active `
    if(content.visible) className += `visible `
    if(content.hidden) className += `hidden `

    if(content.aligned) className += `${content.aligned} aligned `
    if(content.floated) className += `${content.floated} floated `

    className += 'content'

    switch(parentComponentName) {
      case 'su-img':
      case 'su-image':
        element = 'img';
        src = this.src;
    }

    return createElement(
      element,
      {
        class: className,
        attrs: {
          src
        }
      },
      [ this.$slots.default ]
    )
  }
}
</script>
