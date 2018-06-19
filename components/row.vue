<script>
import { CreateElement } from 'vue'
import Row from './row'

export default {
  name: 'su-row',

  props: {
    centered: Boolean,
    stretched: Boolean,

    aligned: String,
    floated: String,
    color: String,
    device: String,

    column: [ String, Number ]
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'row',
      row = new Row(this.$props),
      children = [ this.$slots.default ];

    if(row.centered) className += ` centered`;
    if(row.stretched) className += ` stretched`;

    if(row.aligned) className += ` ${row.aligned} aligned`;
    if(row.floated) className += ` ${row.floated} floated`;
    if(row.color) className += ` ${row.color}`;
    if(row.device) className += ` ${row.device} only`;

    if(row.column) className += ` ${row.column} column`;

    return createElement(
      'div',
      {
        class: className
      },
      children
    )
  }
}
</script>
