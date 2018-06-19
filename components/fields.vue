<script>
import { CreateElement } from 'vue'
import { Fields } from './field'

export default {
  name: 'su-fields',

  props: {
    grouped: Boolean,
    equalWidth: Boolean,
    inline: Boolean,

    column: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'fields',
      fields = new Fields(this.$props),
      children = [ this.$slots.default ];

    if(fields.grouped)  className += ` grouped`
    if(fields.equalWidth)  className += ` equalWidth`
    if(fields.inline)  className += ` inline`

    if(fields.column) className += ` ${fields.column}`

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
