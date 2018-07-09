<script>
import { CreateElement } from 'vue'
import { TableHeadBodyFoot } from './table'

export default {
  name: 'su-tbody',

  props: {
    tag: String,

    fullWidth: Boolean
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    let className = '',
      tableBody = new TableHeadBodyFoot(this.$props),
      children = [];

    if(tableBody.fullWidth) className += ` fullWidth`;

    children.push(this.$slots.default);

    return createElement(
      this.tag || 'tbody',
      {
        class: className
      },
      children
    )
  }
}
</script>

