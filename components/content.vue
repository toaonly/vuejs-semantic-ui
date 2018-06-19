<script>
import { CreateElement } from 'vue'
import Content from './content'

export default {
  name: 'su-content',

  props: {
    active: Boolean,

    aligned: String,
    floated: String,
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = '',
      content = new Content(this.$props);

    if(content.active) className += `active `

    if(content.aligned) className += `${content.aligned} aligned `
    if(content.floated) className += `${content.floated} floated `

    className += 'content'

    return createElement(
      'div',
      {
        class: className
      },
      [ this.$slots.default ]
    )
  }
}
</script>
