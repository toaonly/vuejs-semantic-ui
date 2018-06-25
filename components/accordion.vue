<template>
<div class="ui accordion">
  <slot></slot>
</div>
</template>

<script>
import { Accordion, AccordionSettings } from './accordion';

export default {
  name: 'su-accordion',

  data()  {
    return {
      /** @type {Accordion} */
      _accordion: null,
    };
  },

  model: {

  },

  props: {
    styled: Boolean,
    fluid: Boolean,
    inverted: Boolean,
    field: Boolean,
    menu: Object,

    settings: {
      type: Object,
      default: () => ({}),
      required: false,
    },
  },

  methods: {
    /**
     * @param {string} behavior
     * @param {any[]} args
     */
    accordion(behavior, ...args)  {
      let _behavior = behavior.split(' ').map((s, i) => {
        if(i > 0)	{
          let sf = s[0].toUpperCase();
          return sf + s.substr(1);
        }

        return s;
      }).join('');

      /** @type {function} */
      let behaviorMethod = this[`_${_behavior}`];

      if(typeof behaviorMethod === 'function') {
        behaviorMethod.apply(this, args);
      }
    },

    _refresh() { this._accordion.refresh(); },
    _open(index) { this._accordion.open(index); },
    _closeOthers()  { this._accordion.closeOthers(); },
    _close(index)  { this._accordion.close(index); },
    _toggle(index) { this._accordion.toggle(index); },
  },

  watch: {

  },

  beforeCreate() {},
  created() {},
  beforeMount() {},

  mounted() {
    /** @type {HTMLElement} */
    let el = this.$el;

    /** @type {AccordionSettings} */
    let settings = this.settings;

    setTimeout(() => {
      if(el.closest('.content'))  {
        el.classList.remove('ui');
      } else {
        let accordion = new Accordion(el, settings);

        settings.onOpening = (context) => { this.$emit('opening', { context }); };
        settings.onOpen = (context) => { this.$emit('open', { context }); };
        settings.onClosing = (context) => { this.$emit('closing', { context }); };
        settings.onClose = (context) => { this.$emit('close', { context }); };
        settings.onChanging = (context) => { this.$emit('changing', { context }); };
        settings.onChange = (context) => { this.$emit('change', { context }); };

        accordion.setProps({
          styled: this.styled,
          fluid: this.fluid,
          inverted: this.inverted,
          field: this.field,
          menu: this.menu
        });

        if(accordion.styled)  el.classList.add('styled');
        if(accordion.fluid)  el.classList.add('fluid');
        if(accordion.inverted)  el.classList.add('inverted');
        if(accordion.field)  el.classList.add('field');
        if(accordion.menu)  {
          let menu = accordion.menu;

          el.className += ` ${menu.generateClassName()}`;
        }

        this._accordion = accordion;
      }
    }, 0);
  },
  beforeUpdate()  {},
  updated()   {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

