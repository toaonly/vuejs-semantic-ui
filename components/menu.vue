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
    right: Boolean,
    left: Boolean,

    icon: [ Boolean, String ],

    fixed: String,
    attached: String,
    column: [ String, Number ],
    color: String,
    size: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    let menu = new Menu(this.$props);

    return createElement(
      'div',
      {
        class: menu.generateClassName()
      },
      [ this.$slots.default ]
    )
  }
}
</script>
