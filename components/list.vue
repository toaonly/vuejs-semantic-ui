<script>
import { CreateElement } from 'vue'
import List from './list'

export default {
  name: 'su-list',

  props: {
    element: {
      type: String,
      default: 'div',
      required: false
    },

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
    let element = this.element,
      className = 'ui list',
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
