<script>
import { CreateElement } from 'vue'
import Form from './form'

export default {
  name: 'su-form',

  props: {
    loading: Boolean,
    success: Boolean,
    error: Boolean,
    warning: Boolean,
    equalWidth: Boolean,
    inverted: Boolean,

    size: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'ui form',
      form = new Form(this.$props),
      children = [ this.$slots.default ];

    if(form.loading)  className += ` loading`
    if(form.success)  className += ` success`
    if(form.error)  className += ` error`
    if(form.warning)  className += ` warning`
    if(form.equalWidth) className += ` equal width`
    if(form.inverted) className += ` inverted`

    if(form.size) className += ` ${form.size}`

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
