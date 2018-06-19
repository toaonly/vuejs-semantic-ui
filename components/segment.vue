<script>
import { CreateElement, RenderContext } from 'vue'
import Segment from './segment'

export default {
  name: 'su-segment',

  props: {
    raised: Boolean,
    stacked: [ Boolean, String ],
    piled: Boolean,
    vertical: Boolean,

    disabled: Boolean,
    loading: Boolean,

    inverted: Boolean,
    attached: [ Boolean, String ],
    padded: [ Boolean, String ],
    compact: Boolean,
    color: String,
    secondary: Boolean,
    tertiary: Boolean,
    circular: Boolean,
    clearing: Boolean,
    floated: String,
    aligned: String,
    basic: Boolean
  },

  /**
   * @param {CreateElement} createElement
   * @param {RenderContext<Props>} hack
   */
  render(createElement, hack) {
    let className = 'ui ',
      segment = new Segment(this.$props);

    className += (segment.generateClassName() + ' segment');

    let segmentTemplate = createElement(
      'div',
      { class: className },
      this.$slots.default
    );

    return segmentTemplate;
  }
}
</script>
