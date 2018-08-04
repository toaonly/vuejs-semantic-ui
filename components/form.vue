<script>
import { CreateElement } from 'vue'
import Segment from './segment'
import Form from './form'

export default {
  name: 'su-form',

  props: {
    tag: String,

    loading: Boolean,
    success: Boolean,
    error: Boolean,
    warning: Boolean,
    equalWidth: Boolean,
    inverted: Boolean,

    size: String,

    segment: [ Boolean, Object ]
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'ui',
      form = new Form(this.$props),
      children = [ this.$slots.default ];

    if(form.loading)  className += ` loading`
    if(form.success)  className += ` success`
    if(form.error)  className += ` error`
    if(form.warning)  className += ` warning`
    if(form.equalWidth) className += ` equal width`
    if(form.inverted) className += ` inverted`

    if(form.size) className += ` ${form.size}`

    className += ` form`;

    if(form.segment)  {
      const segment = new Segment(form.segment);

      className += ` ${segment.generateClassName()} segment`;
    }

    return createElement(
      this.tag || 'div',
      {
        class: className
      },
      children
    )
  }
}
</script>
