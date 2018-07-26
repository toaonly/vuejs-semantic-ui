<script>
import { CreateElement } from 'vue'
import List from './list'

export default {
  name: 'su-list',

  props: {
    element: String,
    tag: String,

    divided: Boolean,
    bulleted: Boolean,
    horizontal: Boolean,
    ordered: Boolean,
    link: Boolean,
    inverted: Boolean,
    selection: Boolean,
    animated: Boolean,
    celled: Boolean,

    relaxed: [ Boolean, String ],

    aligned: String,
    floated: String,
    size: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    /** @type {string} */
    let parentComponentName = this.$parent.$vnode.componentOptions.tag;

    let element = this.element || this.tag || 'div',
      className = parentComponentName === 'su-message' ? '' : 'ui',
      list = new List(this.$props),
      children = [ this.$slots.default ];

    if(list.divided) className += ` divided`
    if(list.bulleted) className += ` bulleted`
    if(list.horizontal) className += ` horizontal`
    if(list.ordered) className += ` ordered`
    if(list.link) className += ` link`
    if(list.inverted) className += ` inverted`
    if(list.selection) className += ` selection`
    if(list.animated) className += ` animated`
    if(list.celled) className += ` celled`

    if(list.relaxed) className += ` ${list.relaxed}`

    if(list.aligned) className += ` ${list.aligned} aligned`

    if(list.floated) className += ` ${list.floated} floated`
    if(list.size) className += ` ${list.size}`

    className += ' list';

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
