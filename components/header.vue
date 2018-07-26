<script>
import { CreateElement, RenderContext } from 'vue'
import SuIcon from './icon.vue'
import Header from './header'

export default {
  name: 'su-header',

  props: {
    element: String,
    tag: String,

    icon: String,
    sub: Boolean,
    disabled: Boolean,
    dividing: Boolean,
    block: Boolean,
    attached: [ Boolean, String ],
    floated: String,
    aligned: String,
    color: String,
    inverted: Boolean,
    size: String,
  },

  /**
   * @param {CreateElement} createElement
   * @param {RenderContext<Props>} hack
   */
  render(createElement, hack) {
    let className = 'ui',
      element = (this.element || this.tag) ? this.element || this.tag : 'div',
      header = new Header(this.$props),
      children = [];

    if(header.size)  className += ` ${header.size}`;
    if(header.icon) {
      className += ` icon`;
      children.push(createElement(SuIcon, { props: { name: header.icon } }));
    }
    if(header.sub) className += ` sub`;
    if(header.disabled)  className += ` disabled`;
    if(header.dividing)  className += ` dividing`;
    if(header.block)  className += ` block`;
    if(header.attached)  className += ` ${header.attached}`;
    if(header.floated) className += ` ${header.floated} floated`;
    if(header.aligned) className += ` ${header.aligned}`;
    if(header.color) className += ` ${header.color}`;
    if(header.inverted)  className += ` inverted`;
    if(header.size) className += ` ${header.size}`;

    className += ` header`;

    children.push(this.$slots.default);

    let headerTemplate = createElement(
      element,
      { class: className },
      children
    );

    return headerTemplate;
  },

  mounted() {
    let $el = this.$el,
      subs = $el.querySelectorAll('.ui.header.sub');

    for(let i = 0; i < subs.length; i++)  {
      subs[i].classList.remove('ui');
    }

    if($el.closest('.ui.message'))  {
      $el.classList.remove('ui');
    }
  }
}
</script>
