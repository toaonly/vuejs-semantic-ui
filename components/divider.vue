<script>
import { CreateElement, RenderContext } from 'vue'
import SuIcon from './icon.vue'
import Divider from './divider'

export default {
  name: 'su-divider',

  props: {
    element: String,
    tag: String,

    vertical: Boolean,
    horizontal: Boolean,
    header: Boolean,
    icon: String,
    iconRight: String,

    fitted: Boolean,
    hidden: Boolean,
    section: Boolean,
    clearing: Boolean,
    inverted: Boolean,
  },

  /**
   * @param {CreateElement} createElement
   * @param {RenderContext<Props>} hack
   */
  render(createElement, hack) {
    let element = this.element,
      className = 'ui divider',
      divider = new Divider(this.$props),
      children = [];

    if(divider.icon)  {
      children.push(createElement(SuIcon, { props: { name: divider.icon } }));
    }

    if(divider.vertical)  className += ` vertical`;
    if(divider.horizontal)  className += ` horizontal`;
    if(divider.header)  className += ` header`;
    if(divider.fitted)  className += ` fitted`;
    if(divider.hidden)  className += ` hidden`;
    if(divider.section) className += ` section`;
    if(divider.clearing)  className += ` clearing`;
    if(divider.inverted)  className += ` inverted`;

    children.push(this.$slots.default);

    if(divider.iconRight)  {
      children.push(createElement(SuIcon, { props: { name: divider.icon } }));
    }

    let dividerTemplate = createElement(
      !element ? 'div' : element,
      { class: className },
      children
    );

    return dividerTemplate;
  }
}
</script>
