<script>
import { CreateElement } from 'vue'
import SuIcon from './icon.vue'
import Message from './message'

export default {
  name: 'su-message',

  props: {
    hidden:   Boolean,
    visible:  Boolean,
    floating: Boolean,
    compact:  Boolean,
    warning:  Boolean,
    info:     Boolean,
    positive: Boolean,
    success:  Boolean,
    negative: Boolean,
    error:    Boolean,

    icon:     String,
    color:    String,
    size:     String,

    attached: [ Boolean, String ]
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement)  {
    let className = 'ui message',
      message   = new Message(this.$props),
      children  = [ this.$slots.default ];

    if(message.hidden)    className += ` hidden`
    if(message.visible)   className += ` visible`
    if(message.floating)  className += ` floating`
    if(message.compact)   className += ` compact`
    if(message.warning)   className += ` warning`
    if(message.info)      className += ` info`
    if(message.positive)  className += ` positive`
    if(message.success)   className += ` success`
    if(message.negative)  className += ` negative`
    if(message.error)     className += ` error`

    if(message.icon) {
      className += ` icon`;
      children.push(createElement(SuIcon, { props: { name: message.icon } }));
    }
    if(message.color)     className += ` ${message.color}`
    if(message.size)      className += ` ${message.size}`

    if(message.attached)  className += ` ${message.attached}`

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
