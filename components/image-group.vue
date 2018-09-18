<script>
import { CreateElement } from 'vue'
import { ImageGroup } from './image'

export default {
  name: 'su-image-group',

  props: {
    size: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    const imageGroup = new ImageGroup(this.$props);
    let className = 'ui';

    if(imageGroup.size) className += ` ${imageGroup.size}`;

    className += ` images`;

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
