<script>
import { CreateElement } from 'vue'
import Menu from './menu'

export default {
  name: 'su-menu',

  props: {
    secondary: Boolean,
    pointing: Boolean,
    tabular: Boolean,
    text: Boolean,
    vertical: Boolean,
    pagination: Boolean,
    stackable: Boolean,
    inverted: Boolean,
    fluid: Boolean,
    compact: Boolean,
    borderless: Boolean,

    icon: [ Boolean, String ],

    fixed: String,
    attached: String,
    column: String,
    color: String,
    size: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    let className = 'ui',
      menu = new Menu(this.$props);

    if(menu.secondary) className += ` secondary`
    if(menu.pointing) className += ` pointing`
    if(menu.tabular) className += ` tabular`
    if(menu.text) className += ` text`
    if(menu.vertical) className += ` vertical`
    if(menu.pagination) className += ` pagination`
    if(menu.stackable) className += ` stackable`
    if(menu.inverted) className += ` inverted`
    if(menu.fluid) className += ` fluid`
    if(menu.compact) className += ` compact`
    if(menu.borderless) className += ` borderless`

    if(menu.icon) className += ` ${menu.icon}`

    if(menu.fixed) className += ` ${menu.fixed} fixed`
    if(menu.attached) className += ` ${menu.attached}`
    if(menu.column) className += ` ${menu.column}`
    if(menu.color) className += ` ${menu.color}`
    if(menu.size) className += ` ${menu.size}`

    className += ' menu';

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
