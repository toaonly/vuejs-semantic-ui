<script>
import Vue, { CreateElement, Component } from 'vue'
import Rail from './rail'


export default {
  name: 'su-rail',

  props: {
    left: Boolean,
    right: Boolean,
    internal: Boolean,
    dividing: Boolean,
    attached: Boolean,

    size: String,

    close: [ Boolean, String ]
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'ui rail',
      rail = new Rail(this.$props),
      children = [ this.$slots.default ];

    if(rail.left) className += ` left`
    if(rail.right)  className += ` right`
    if(rail.internal) className += ` internal`
    if(rail.dividing) className += ` dividing`
    if(rail.attached) className += ` attached`

    if(rail.size) className += ` ${rail.size}`

    if(rail.close)  className += ` ${rail.close}`

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
