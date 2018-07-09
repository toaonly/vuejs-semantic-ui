<script>
import { CreateElement } from 'vue'
import { TableCellHeader } from './table'

export default {
  name: 'su-td',

  props: {
    tag: String,

    positive: Boolean,
    negative: Boolean,
    error: Boolean,
    warning: Boolean,
    disabled: Boolean,
    selectable: Boolean,
    collapsing: Boolean,

    verticalAlign: String,
    textAlign: String,

    width: [ String, Number ]
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    let className = '',
      tableCell = new TableCell(this.$props),
      children = [];

    if(tableCell.positive) className += ` positive`
    if(tableCell.negative) className += ` negative`
    if(tableCell.error)  className += ` error`
    if(tableCell.warning)  className += ` warning`
    if(tableCell.disabled) className += ` disabled`
    if(tableCell.selectable) className += ` selectable`
    if(tableCell.collapsing) className += ` collapsing`

    if(tableCell.verticalAlign)  className += ` ${tableCell.verticalAlign}`
    if(tableCell.textAlign)  className += ` ${tableCell.textAlign}`
    if(tableCell.verticalAlign || tableCell.textAlign)  className += ` aligned`

    if(tableCell.width)  className += ` ${tableCell.width}`

    children.push(this.$slots.default);

    return createElement(
      this.tag || 'td',
      {
        class: className
      },
      children
    )
  }
}
</script>

