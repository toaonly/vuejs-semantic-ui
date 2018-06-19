<script>
import { CreateElement } from 'vue'

export default {
  name: 'su-item-header',

  props: {
    element: {
      type: String,
      default: 'div',
      required: false
    }
  },

  methods: {
    eventHandler(e, name)  {
      this.$emit(name, e);
    }
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    return createElement(
      this.element,
      {
        class: 'header',
        on: {
          click: (e) => this.eventHandler(e, 'click')
        }
      },
      [
        this.$slots.default
      ]
    )
  }
}
</script>
