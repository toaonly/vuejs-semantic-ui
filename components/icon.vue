<script>
import { CreateElement, RenderContext } from 'vue'
import Icon from './icon'

export default {
  name: 'su-icon',

  props: {
    name: [ String, Array ],

    disabled: Boolean,
    loading: Boolean,
    fitted: Boolean,
    link: Boolean,
    circular: Boolean,
    inverted: Boolean,
    bordered: Boolean,

    flipped: [ Boolean, String ],
    rotated: [ Boolean, String ],
    corner: [ Boolean, String ],

    floated: String,
    size: String,
    color: String,
  },

  /**
   * @param {CreateElement} createElement
   * @param {RenderContext<Props>} hack
   */
  render(createElement, hook) {
    let className = 'icon',
      icon = new Icon(this.$props);

    if(icon.name)  className += ` ${icon.name}`

    if(icon.disabled)  className += ` disabled`
    if(icon.loading)  className += ` loading`
    if(icon.fitted)  className += ` fitted`
    if(icon.link)  className += ` link`
    if(icon.flipped)  className += ` ${icon.flipped}`
    if(icon.rotated)  className += ` ${icon.rotated}`
    if(icon.circular)  className += ` circular`
    if(icon.inverted)  className += ` inverted`
    if(icon.bordered)  className += ` bordered`
    if(icon.corner)  className += ` ${icon.corner}`

    if(icon.floated)  className += ` ${icon.floated} floated`
    if(icon.color)  className += ` ${icon.color}`
    if(icon.size)  className += ` ${icon.size}`

    return createElement(
      'i',
      {
        class: className,
        on: {
          click: (e) => {
            this.$emit('click', e);
          }
        }
      }
    )
  }
}
</script>
