<template>
<div class="ui">
  <su-icon v-if="_dropdown.icon" :name="_dropdown.icon" />
  <slot></slot>
</div>
</template>

<script>
import { Dropdown, DropdownSettings } from './dropdown'

export default {
  name: 'su-dropdown',

  data()  {
    return {
      /** @type {Dropdown} */
      _dropdown: null
    }
  },

  model: {
    prop: 'value'
  },

  props: {
    value: [ String, Number ],

    selection: Boolean,
    search: Boolean,
    multiple: Boolean,
    inline: Boolean,
    pointing: Boolean,
    floating: Boolean,
    simple: Boolean,
    labeled: Boolean,
    loading: Boolean,
    error: Boolean,
    active: Boolean,
    disabled: Boolean,
    scrolling: Boolean,
    compact: Boolean,
    fluid: Boolean,

    icon: String,

    settings: {
      type: Object,
      default: () => ({}),
      required: false,
    },
  },

  beforeCreate() {},
  created() {},
  beforeMount() {},

  mounted() {
    /** @type {HTMLElement} */
    let el = this.$el;

    /** @type {DropdownSettings} */
    let settings = this.settings;

    let dropdown = new Dropdown(el, settings);

    settings.onOpening = (context) => { this.$emit('opening', { context }); };
    settings.onOpen = (context) => { this.$emit('open', { context }); };
    settings.onClosing = (context) => { this.$emit('closing', { context }); };
    settings.onClose = (context) => { this.$emit('close', { context }); };
    settings.onChanging = (context) => { this.$emit('changing', { context }); };
    settings.onChange = (context) => { this.$emit('change', { context }); };

    dropdown.setProps(this.$props);

    if(dropdown.selection)  el.classList.add('selection');
    if(dropdown.search) el.classList.add('search');
    if(dropdown.multiple)   el.classList.add('multiple');
    if(dropdown.inline) el.classList.add('inline');
    if(dropdown.pointing)   el.classList.add('pointing');
    if(dropdown.floating)   el.classList.add('floating');
    if(dropdown.simple) el.classList.add('simple');
    if(dropdown.labeled)    el.classList.add('labeled');
    if(dropdown.loading)    el.classList.add('loading');
    if(dropdown.error)  el.classList.add('error');
    if(dropdown.active) el.classList.add('active');
    if(dropdown.disabled)   el.classList.add('disabled');
    if(dropdown.scrolling)  el.classList.add('scrolling');
    if(dropdown.compact)    el.classList.add('compact');
    if(dropdown.fluid)  el.classList.add('fluid');

    el.classList.add('dropdown');

    this._dropdown = dropdown;
  },
  beforeUpdate()  {},
  updated()   {},
  beforeDestroy() {},
  destroyed() {}
}
</script>
