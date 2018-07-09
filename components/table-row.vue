<script>
import { CreateElement } from 'vue'
import { TableRow } from './table'

export default {
  name: 'su-tr',

  props: {
    positive: Boolean,
    negative: Boolean,
    error: Boolean,
    warning: Boolean,
    disabled: Boolean,

    verticalAlign: String,
    textAlign: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    let className = '',
      tableRow = new TableRow(this.$props),
      children = [];

    if(tableRow.positive) className += ` positive`
    if(tableRow.negative) className += ` negative`
    if(tableRow.error)  className += ` error`
    if(tableRow.warning)  className += ` warning`
    if(tableRow.disabled) className += ` disabled`

    if(tableRow.verticalAlign)  className += ` ${tableRow.verticalAlign}`
    if(tableRow.textAlign)  className += ` ${tableRow.textAlign}`
    if(tableRow.verticalAlign || tableRow.textAlign)  className += ` aligned`

    children.push(this.$slots.default);

    return createElement(
      'tr',
      {
        class: className
      },
      children
    )
  }
}
</script>

