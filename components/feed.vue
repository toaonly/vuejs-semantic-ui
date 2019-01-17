<script>
import { CreateElement } from 'vue'
import Feed from './feed'

export default {
  name: 'su-feed',

  props: {
    size: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    const feed = new Feed(this.$props);

    return createElement(
      'div',
      {
        class: Feed.generateClassName(feed)
      },
      [ this.$slots.default ]
    )
  }
}
</script>
