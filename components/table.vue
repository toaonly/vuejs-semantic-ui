<script>
import { CreateElement } from 'vue'
import Table from './table'

export default {
  name: 'su-table',

  props: {
    celled: Boolean,
    striped: Boolean,
    definition: Boolean,
    structured: Boolean,
    singleLine: Boolean,
    fixed: Boolean,
    unstackable: Boolean,
    selectable: Boolean,
    inverted: Boolean,
    collapsing: Boolean,
    sortable: Boolean,

    basic: [ Boolean, String ],
    padded: [Boolean, String],
    compact: [Boolean, String],

    column: [ String, Number ],

    color: String,
    size: String,
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    let className = 'ui',
      table = new Table(this.$props),
      children = [];

    if(table.celled) className += ` celled`
    if(table.striped) className += ` striped`
    if(table.definition) className += ` definition`
    if(table.structured) className += ` structured`
    if(table.singleLine) className += ` singleLine`
    if(table.fixed) className += ` fixed`
    if(table.unstackable) className += ` unstackable`
    if(table.selectable) className += ` selectable`
    if(table.inverted) className += ` inverted`
    if(table.collapsing) className += ` collapsing`
    if(table.sortable) className += ` sortable`

    if(table.padded) className += ` ${table.padded}`
    if(table.compact) className += ` ${table.compact}`
    if(table.basic) className += ` ${table.basic}`

    if(table.column) className += ` ${table.column}`

    if(table.color) className += ` ${table.color}`
    if(table.size) className += ` ${table.size}`

    className += ' table';

    children.push(this.$slots.default);

    return createElement(
      'table',
      {
        class: className
      },
      children
    )
  },

  mounted() {
    if(this.sortable === true)  {
      $(this.$el).tablesort();
    }
  }
}
</script>

