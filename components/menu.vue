<script>
import { CreateElement, VNode } from 'vue'
import Menu from './menu'

export default {
  name: 'su-menu',

  props: {
    secondary: Boolean,
    pointing: Boolean,
    tabular: Boolean,
    text: Boolean,
    vertical: Boolean,
    pagination: Boolean,
    stackable: Boolean,
    inverted: Boolean,
    fluid: Boolean,
    compact: Boolean,
    borderless: Boolean,
    labeled: Boolean,
    right: Boolean,
    left: Boolean,

    icon: [ Boolean, String ],

    fixed: String,
    attached: String,
    column: [ String, Number ],
    color: String,
    floated: String,
    size: String
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    /** @type {string} */
    let parentComponentName = this.$parent.$vnode.componentOptions.tag;

    let menu = new Menu(this.$props),
      className = menu.generateClassName();

    switch(parentComponentName) {
      case 'su-menu':
      case 'su-item':
        className = className.replace('ui', '');
        break;
    }

    return createElement(
      'div',
      {
        class: className
      },
      [ this.$slots.default ]
    )
  },

  mounted() {
    /** @type {Vue[]} */
    let items = [];

    this.$children.forEach(v => {
      if(v.$vnode.tag.indexOf('su-item') >= 0) {
        if(!v.$props.to && (v.$el.nodeName === 'A' || v.$props.link)) {
          v.$on('click', function(e) {
            e.stopPropagation();

            if(!this.disabled)  {
              items.forEach(item => item.$el.classList.remove('active'));

              this.$el.classList.add('active');
            }
          });

          items.push(v);
        }
      }
    });
  }
}
</script>
