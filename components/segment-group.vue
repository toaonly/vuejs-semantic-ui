<script>
import { CreateElement, RenderContext } from 'vue'
import { SegmentGroup } from './segment'

export default {
  name: 'su-segment-group',

  props: {
    horizontal: Boolean,
    raised: Boolean,
    stacked: [ Boolean, String ],
    piled: Boolean,
    compact: Boolean,
  },

  /**
   * @param {CreateElement} createElement
   * @param {RenderContext<Props>} hack
   */
  render(createElement, hack) {
    let className = 'ui segments',
      segmentGroup = new SegmentGroup(this.$props),
      children = [];

    if(segmentGroup.horizontal) className += ` horizontal`;
    if(segmentGroup.raised)  className += ` raised`;
    if(segmentGroup.stacked) className += ` ${segmentGroup.stacked}`;
    if(segmentGroup.piled) className += ` piled`;
    if(segmentGroup.compact) className += ` compact`;

    children.push(this.$slots.default);

    let segmentGroupTemplate = createElement(
      'div',
      { class: className },
      children
    );

    return segmentGroupTemplate;
  }
}
</script>
