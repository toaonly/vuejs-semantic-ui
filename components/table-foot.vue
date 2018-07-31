<script>
import { CreateElement } from 'vue'
import { TableSection } from './table'
import TableSectionProps from './table-section-props'

export default {
  name: 'su-foot',

  props: TableSectionProps,

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    let className = '',
      tableFoot = new TableSection(this.$props),
      children = [];

    children.push(this.$slots.default);

    return createElement(
      'tfoot',
      {
        class: TableSection.generateClassName(tableFoot)
      },
      children
    )
  }
}
</script>
