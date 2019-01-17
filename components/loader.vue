<script>
import Vue, { CreateElement, Component } from 'vue'
import Loader from './loader'

/** @type {Component} */
export default {
  name: 'su-loader',

  model: {
    prop: 'value'
  },

  props: {
    value: Boolean,

    indeterminate: Boolean,
    active: Boolean,
    disabled: Boolean,
    inverted: Boolean,

    text: String,
    size: String,

    inline: [ Boolean, String ],
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'ui loader',
      loader = new Loader(this.$props),
      children = [ this.$slots.default ];

    if(loader.indeterminate)  className += ` indeterminate`
    if(loader.active) className += ` active`
    if(loader.disabled) className += ` disabled`
    if(loader.inverted) className += ` inverted`

    if(loader.text) {
      className += ` text`;
      children.push(loader.text);
    }
    if(loader.size) className += ` ${loader.size}`

    if(loader.inline) className += ` ${loader.inline}`

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
