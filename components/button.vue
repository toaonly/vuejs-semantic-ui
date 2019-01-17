<script>
import { CreateElement, RenderContext } from 'vue'
import Button from './button'
import SuIcon from './icon.vue'

export default {
  name: 'su-button',

  props: {
    animated: [ Boolean, String ],
    animatedHiddenContent: String,
    animatedHiddenIcon: String,
    labeled: Boolean,
    attached: String,

    icon: String,
    iconRight: String,
    basic: Boolean,
    inverted: Boolean,

    active: Boolean,
    disabled: Boolean,
    loading: Boolean,
    toggle: Boolean,
    fluid: Boolean,
    circular: Boolean,
    compact: Boolean,
    primary: Boolean,

    color: String,
    size: String,
    floated: String,
    tabindex: [ String, Number ]
  },

  methods: {
    /**
     * @param {MouseEvent} e
     */
    onClick(e) {
      // e.stopPropagation();
      this.$emit('click', e);
    }
  },

  /**
   * @param {CreateElement} createElement
   * @param {RenderContext<Props>} hack
   */
  render(createElement, hack)  {
    let element = 'button',
      className = 'ui button',
      attrs = {},
      button = new Button(this.$props),
      hasDefaultSlot = false,
      children = [];

    if(button.animated) {
      let hC = button.animatedHiddenContent,
        hCI = button.animatedHiddenIcon,
        vc = [ this.$slots.default ];

      element = 'div';
      className += ` ${button.animated}`;

      if(button.icon) vc.push(createElement(SuIcon, { props: { name: button.icon } }));

      children.push(createElement('div', {
        class: 'visible content'
      }, vc));

      children.push(createElement('div', {
        class: 'hidden content'
      }, [
        hC ? hC : null,
        hCI ? createElement(SuIcon, { props: { name: hCI } }) : null
      ]));

      hasDefaultSlot = true;
    }

    if(button.labeled)  {
      element = 'div';

      if(button.iconRight) {
        className += ` icon right`;
        children.push(createElement(SuIcon, { props: { name: button.iconRight } }));
      }

      className += ' labeled';
    }

    if(button.attached)  {
      element = 'div';
      className += ` ${button.attached} attached`;
    }

    if(button.basic)  className += ` basic`;
    if(button.inverted)  className += ` inverted`;
    if(button.color)  className += ` ${button.color}`;
    if(button.active)  className += ` active`;
    if(button.disabled)  className += ` disabled`;
    if(button.loading)  className += ` loading`;
    if(button.size)  className += ` ${button.size}`;
    if(button.floated)  className += ` ${button.floated} floated`;
    if(button.compact)  className += ` compact`;
    if(button.toggle)  className += ` toggle`;
    if(button.fluid)  className += ` fluid`;
    if(button.circular)  className += ` circular`;
    if(button.primary)  className += ` primary`;

    if(!hasDefaultSlot) {
      if(button.icon) {
        className += ` icon`;
        children.push(createElement(SuIcon, { props: { name: button.icon } }));
      }

      children.push(this.$slots.default);

      if(button.iconRight) {
        className += ` icon`;
        children.push(createElement(SuIcon, { props: { name: button.iconRight } }));
      }
    }

    if(button.tabindex) attrs.tabindex = button.tabindex;

    /** @type {VNode} */
    let buttonTemplate = createElement(
      element,
      {
        class: className,
        attrs: attrs,
        on: {
          click: this.onClick
        }
      },
      children
    );

    return buttonTemplate;
  },

  mounted() {
    let $el = this.$el;

    if($el.querySelector('.ui.label:first-child'))  {
      $el.classList.remove('labeled');
      $el.classList.add('left');
      $el.classList.add('labeled');
    }
  }
}
</script>

<style scoped>
.ui.button i.icon {
  font-size: inherit;
}
</style>
