<script>
import { CreateElement, RenderContext } from 'vue'
import { ButtonGroup } from './button'

export default {
  name: 'su-button-group',

  data()  {
    return {
      buttonGroup: null
    }
  },

  props: {
    icon: Boolean,
    condition: Boolean,
    vertical: Boolean,
    labeled: Boolean,
    column: [ String, Number ],
    color: String,
    basic: Boolean,
    size: String,
    attached: String,
  },

  /**
   * @param {CreateElement} createElement
   * @param {RenderContext<Props>} hack
   */
  render(createElement, hack)  {
    let className = 'ui buttons',
      children = [ this.$slots.default ];

    if(this.buttonGroup.icon)  className += ` icon`;
    if(this.buttonGroup.vertical)  className += ` vertical`;
    if(this.buttonGroup.labeled)  className += ` labeled`;
    if(this.buttonGroup.basic)  className += ` basic`;
    if(this.buttonGroup.size)  className += ` ${this.buttonGroup.size}`;
    if(this.buttonGroup.attached)  className += ` ${this.buttonGroup.attached} attached`;
    if(this.buttonGroup.column)  className += ` ${this.buttonGroup.column}`;
    if(this.buttonGroup.color)  className += ` ${this.buttonGroup.color}`;

    let buttonGroupTemplate = createElement(
      'div',
      { class: className },
      children
    );

    return buttonGroupTemplate;
  },

  created() {
    this.buttonGroup = new ButtonGroup(this.$props);
  },

  mounted() {
    if(this.buttonGroup.condition)  {
      let $el = this.$el,
        buttons = $el.querySelectorAll('.ui.button'),
        orEl = document.createElement('div');

      orEl.classList.add('or');

      for(let index = 0; index < buttons.length - 1; index++) {
        $el.insertBefore(orEl.cloneNode(true), buttons.item(index + 1));
      }
    }
  }
}
</script>
