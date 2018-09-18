<script>
import { CreateElement } from 'vue'
import Content from './content';

export default {
  name: 'su-extra-content',

  props: {
    aligned: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let extraContent = new Content(this.$props),
      className = Content.generateClassName(extraContent);

    className += ' extra';

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
