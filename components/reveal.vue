<script>
import Vue, { CreateElement } from 'vue'
import Reveal from './reveal'

export default {
  name: 'su-reveal',

  props: {
    fade: Boolean,
    active: Boolean,
    instant: Boolean,
    disabled: Boolean,
    image: Boolean,
    /** if image is true, circular is only activated. */
    circular: Boolean,

    /** if image is true, size is only activated. */
    size: String,

    move: [ Boolean, String ],
    rotate: [ Boolean, String ],
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'ui reveal',
      reveal = new Reveal(this.$props),
      children = [ this.$slots.default ];

    if(reveal.fade) className += ` fade`
    if(reveal.active) className += ` active`
    if(reveal.instant) className += ` instant`
    if(reveal.disabled) className += ` disabled`
    if(reveal.image) className += ` image`
    if(reveal.circular) className += ` circular`

    if(reveal.size) className += ` ${reveal.size}`

    if(reveal.move) className += ` ${reveal.move}`
    if(reveal.rotate) className += ` ${reveal.rotate}`

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
