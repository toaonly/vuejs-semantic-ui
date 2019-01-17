<script>
import { CreateElement } from 'vue'
import { TableCell } from './table'
import TableCellProps from './table-cell-props'

export default {
  name: 'su-th',

  props: TableCellProps,

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    let className = '',
      tableHeaderCell = new TableCell(this.$props),
      children = [];

    children.push(this.$slots.default);

    return createElement(
      'th',
      {
        class: TableCell.generateClassName(tableHeaderCell)
      },
      children
    )
  }
}
</script>
