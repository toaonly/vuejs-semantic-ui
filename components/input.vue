<script>
import { CreateElement, RenderContext } from 'vue'
import Input from './input'
import SuIcon from './icon.vue'

export default {
  name: 'su-input',

  data()  {
    return {
      _value: null
    }
  },

  model: {
    prop: 'value'
  },

  props: {
    value: {
      type: [ String, Number, Boolean ],
      default: '',
      required: false
    },
    id: String,
    type: String,
    placeholder: String,

    focus: Boolean,
    loading: Boolean,
    disabled: Boolean,
    error: Boolean,
    transparent: Boolean,
    inverted: Boolean,
    fluid: Boolean,

    icon: String,
    iconLeft: String,
    size: String,

    action: [ Boolean, String ],
    labeled: [ Boolean, String ],
  },

  methods: {
    eventHandler(e, en)  {
      this.$emit(en, e);
    }
  },

  watch: {
    value() {
      this._value = this.value;
    },

    _value()  {
      this.$emit('input', this._value);
    }
  },

  /**
   * @param {CreateElement} createElement
   * @param {RenderContext<Props>} hack
   */
  render(createElement, hook)  {
    let className = 'ui input',
      input = new Input(this.$props),
      leftChildren = [],
      rightChildren = [],
      children = [ createElement('input', {
        domProps: { value: this.value },
        attrs: {
          id: this.id ? this.id : void(0),
          type: this.type ? this.type : 'text',
          placeholder: this.placeholder
        },
        on: {
          input: (event) => {
            this._value = event.target.value;
            this.$emit('input', this._value);
          }
        }
      }) ],
      hasDefaultSlot = false;

    if(input.focus) className += ` focus`
    if(input.loading) className += ` loading`
    if(input.disabled)  className += ` disabled`
    if(input.error) className += ` error`
    if(input.transparent) className += ` transparent`
    if(input.inverted)  className += ` inverted`
    if(input.fluid) className += ` fluid`

    if(input.icon) {
      className += ` icon`;
      rightChildren.push(createElement(SuIcon, { props: { name: input.icon } }));
    }
    if(input.iconLeft) {
      className += ` left icon`;
      leftChildren.push(createElement(SuIcon, { props: { name: input.iconLeft } }));
    }
    if(input.size) className += ` ${input.size}`

    if(input.action) {
      className += ` ${input.action}`

      if(!hasDefaultSlot) {
        hasDefaultSlot = true;

        if(this.action === 'left')  {
          leftChildren.push(this.$slots.default);
        } else {
          rightChildren.push(this.$slots.default);
        }
      }
    }
    if(input.labeled) {
      className += ` ${input.labeled}`;

      if(!hasDefaultSlot) {
        hasDefaultSlot = true;

        if(this.labeled !== 'right')  {
          leftChildren.push(this.$slots.default);
        } else {
          rightChildren.push(this.$slots.default);
        }
      }
    }

    return createElement(
      'div',
      {
        class: className,
        on: {
          click: (e) => { this.eventHandler(e, 'click') },
          keyup: (e) => { this.eventHandler(e, 'keyup') },
          keydown: (e) => { this.eventHandler(e, 'keydown') },
          keypress: (e) => { this.eventHandler(e, 'keypress') },
        },
      },
      leftChildren.concat(children).concat(rightChildren)
    )
  },

  created() {
    this._value = this.value;
  },

  mounted() {
    /** @type {HTMLDivElement} */
    let $el = this.$el,
      labels = $el.querySelectorAll('.ui.label');

    if(labels.length > 1)  {
      /** @type {HTMLInputElement} */
      let input = $el.querySelector('input');

      $el.insertBefore(input, labels[1]);
    }

    if($el.classList.contains('corner') && labels.length === 1) {
      this.labeled.split(' ').forEach(v => {
        labels[0].classList.add(v);
      });
    }
  }
}
</script>
