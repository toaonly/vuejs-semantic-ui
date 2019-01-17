<script>
import { CreateElement } from 'vue'
import { LabelGroup } from './label'

export default {
  name: 'su-label-group',

  props: {
    size: String,
    color: String,
    tagged: Boolean,
    circular: [ Boolean, String ],
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'ui',
      labelGroup = new LabelGroup(this.$props);

    if(labelGroup.size) className += ` ${labelGroup.size}`
    if(labelGroup.color) className += ` ${labelGroup.color}`
    if(labelGroup.tagged) className += ' tagged'
    if(labelGroup.circular) className += ` ${labelGroup.circular}`

    className += ' labels'

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
