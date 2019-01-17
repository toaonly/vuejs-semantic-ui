<script>
import { CreateElement } from 'vue'
import { Cards } from './card'

export default {
  name: 'su-cards',

  props: {
    stackable: Boolean,
    doubling: Boolean,
    centered: Boolean,
    link: Boolean,

    column: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    const cards = new Cards(this.$props),
      children = [];

    children.push(this.$slots.default);

    return createElement(
      'div',
      {
        class: Cards.generateClassName(cards)
      },
      children
    )
  }
}
</script>
