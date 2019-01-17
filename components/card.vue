<script>
import { CreateElement } from 'vue'
import Card from './card'

export default {
  name: 'su-card',

  props: {
    fluid: Boolean,
    centered: Boolean,
    raised: Boolean,
    link: Boolean,

    /** aligned prop is used to align for children contents, not be added class name */
    aligned: String,
    color: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let card = new Card(this.$props),
      children = [];

    children.push(this.$slots.default);

    return createElement(
      'div',
      {
        class: Card.generateClassName(card)
      },
      children
    )
  }
}
</script>
