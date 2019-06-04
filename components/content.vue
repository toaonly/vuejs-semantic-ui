<script>
import { CreateElement } from 'vue'
import Content from './content'

export default {
  name: 'su-content',

  props: {
    active: Boolean,
    visible: Boolean,
    hidden: Boolean,
    scrolling: Boolean,
    image: Boolean,

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
      content = new Content(this.$props),
      src;

    switch(parentComponentName) {
      case 'su-img':
      case 'su-image':
        element = 'img';
        src = this.src;
    }

    return createElement(
      element,
      {
        class: Content.generateClassName(content),
        attrs: {
          src
        }
      },
      [ this.$slots.default ]
    )
  }
}
</script>
