<script>
import { CreateElement } from 'vue'
import Column from './column'

export default {
  name: 'su-column',

  props: {
    stretched: Boolean,

    aligned: String,
    floated: String,
    color: String,
    device: String,
    largeScreen: String,
    widescreen: String,
    computer: String,
    tablet: String,
    mobile: String,

    wide: [ String, Number ],
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'column',
      column = new Column(this.$props),
      children = [ this.$slots.default ];

    if(column.stretched) className += ` stretched`;

    if(column.aligned) className += ` ${column.aligned} aligned`;
    if(column.floated) className += ` ${column.floated} floated`;
    if(column.color) className += ` ${column.color}`;
    if(column.device) className += ` ${column.device} only`;
    if(column.largeScreen) className += ` ${column.largeScreen} large screen`;
    if(column.widescreen) className += ` ${column.widescreen} widescreen`;
    if(column.computer) className += ` ${column.computer} computer`;
    if(column.tablet) className += ` ${column.tablet} tablet`;
    if(column.mobile) className += ` ${column.mobile} mobile`;

    if(column.wide) className += ` ${column.wide} wide`;

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
