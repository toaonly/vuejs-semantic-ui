<script>
import { CreateElement } from 'vue'
import Field from './field'

export default {
  name: 'su-field',

  props: {
    label: String,

    error: Boolean,
    disabled: Boolean,
    inline: Boolean,
    required: Boolean,

    width: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'field',
      field = new Field(this.$props),
      children = [];

    if(field.label) {
      children.push(createElement('label', {}, [ field.label ]));
    }

    if(field.error)  className += ` error`
    if(field.disabled)  className += ` disabled`
    if(field.inline)  className += ` inline`
    if(field.required)  className += ` required`

    if(field.width) className += ` ${field.width} wide`

    children.push(this.$slots.default);

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
