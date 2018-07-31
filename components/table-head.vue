<script>
import { CreateElement } from 'vue'
import { TableSection } from './table'
import TableSectionProps from './table-section-props'

export default {
  name: 'su-thead',

  props: TableSectionProps,

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    let className = '',
      tableHead = new TableSection(this.$props),
      children = [];

    children.push(this.$slots.default);

    return createElement(
      'thead',
      {
        class: TableSection.generateClassName(tableHead)
      },
      children
    )
  }
}
</script>
