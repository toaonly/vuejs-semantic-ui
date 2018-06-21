<script>
import { CreateElement, RenderContext } from 'vue'
import Label from './label'
import SuIcon from './icon.vue'

export default {
  name: 'su-label',

  props: {
    element: String,
    tag: String,

    for: String,

    pointer: Boolean,

    src: String,
    pointing: [ Boolean, String ],
    corner: String,
    ribbon: [ Boolean, String ],
    color: String,
    icon: String,
    iconRight: String,
    basic: Boolean,
    tagged: Boolean,
    attached: String,
    floating: Boolean,
    circular: [ Boolean, String ],
    size: String,

    detail: String,

    noAnchor: Boolean
  },

  /**
   * @param {CreateElement} createElement
   * @param {RenderContext<Props>} hack
   */
  render(createElement, hack) {
    let element = this.element || this.tag || 'a',
      className = 'ui',
      label = new Label(this.$props),
      children = [];

    if(label.pointing)  {
      element = 'div';
      className += ` ${label.pointing}`;
    }

    if(label.src) {
      children.push(createElement('img', { attrs: { src: label.src } }));
      className += ` image`;
    }

    if(label.icon)  {
      children.push(createElement(SuIcon, { props: { name: label.icon } }));
    }

    children.push(this.$slots.default);

    if(label.detail)  {
      element = 'div';
      children.push(createElement('div', { class: 'detail' }, label.detail));
    }

    if(label.iconRight)  {
      children.push(createElement(SuIcon, { props: { name: label.iconRight } }));
    }

    if(label.corner)  className += ` ${label.corner} corner`;
    if(label.tagged)  className += ` tagged`;
    if(label.basic)  className += ` basic`;
    if(label.ribbon)  className += ` ${label.ribbon}`;
    if(label.attached)  className += ` ${label.attached} attached`;
    if(label.floating)  className += ` floating`;
    if(label.circular)  className += ` ${label.circular}`;
    if(label.size)  className += ` ${label.size}`;

    if(label.color)  className += ` ${label.color}`;

    className += ` label`;

    if(label.noAnchor) element = 'div';

    let labelTemplate = createElement(
      element,
      {
        class: className,
        attrs: {
          for: this.for
        }
      },
      children
    );

    return labelTemplate;
  }
}
</script>
