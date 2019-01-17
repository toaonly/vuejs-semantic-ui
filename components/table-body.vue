<script>
import { CreateElement } from 'vue'
import { TableSection } from './table'
import TableSectionProps from './table-section-props'

export default {
  name: 'su-tbody',

  props: TableSectionProps,

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    let className = '',
      tableBody = new TableSection(this.$props),
      children = [];

    children.push(this.$slots.default);

    return createElement(
      'tbody',
      {
        class: TableSection.generateClassName(tableBody)
      },
      children
    )
  }
}
</script>
