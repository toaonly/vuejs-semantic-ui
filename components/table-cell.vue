<script>
import { CreateElement } from 'vue'
import { TableCell } from './table'
import TableCellProps from './table-cell-props'

export default {
  name: 'su-td',

  props: TableCellProps,

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    let className = '',
      tableCell = new TableCell(this.$props),
      children = [];

    children.push(this.$slots.default);

    return createElement(
      'td',
      {
        class: TableCell.generateClassName(tableCell)
      },
      children
    )
  }
}
</script>
