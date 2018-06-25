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

    className += menu.generateClassName();

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
