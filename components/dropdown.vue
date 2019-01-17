<template>
<div class="ui">
  <input type="hidden" :name="name" />
  <div v-if="value" class="text">{{ items.filter(item => item.value === value)[0].name }}</div>
  <div v-else class="default text">{{ placeholder }}</div>
  <input v-if="search" class="search" autocomplete="off" tabindex="0">
  <su-icon v-if="icon" :name="icon" />
  <div class="menu">
    <div v-for="(item, index) in items"
      :key="index"
      :data-index="index"
      :data-value="item.value"
      v-html="item.name"
      class="item"></div>
  </div>
</div>
</template>

<script>
import { Dropdown, DropdownModule, DropdownSettings } from './dropdown'

export default {
  name: 'su-dropdown',

  data()  {
    return {
      /** @type {DropdownModule} */
      _dropdown: null
    }
  },

  model: {
    prop: 'value'
  },

  props: {
    value: [ String, Number, Boolean, Object, Array ],

    items: {
      type: Array,
      default: () => []
    },

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

    icon: {
      type: String,
      default: 'dropdown'
    },

    name: String,
    placeholder: String,

    settings: {
      type: Object,
      default: () => ({}),
      required: false,
    },
  },

  methods: {
    onChange(value, text, $selected, context)  {
      this.$emit('input', value);
      this.$emit('change', { context, value, text, $selected });
    }
  },

  beforeCreate() {},
  created() {
    this._dropdown = null;
  },
  beforeMount() {},

  mounted() {
    /** @type {HTMLElement} */
    let el = this.$el;

    /** @type {DropdownSettings} */
    let settings = this.settings;

    let dropdown = new Dropdown(this.$props);

    settings.onChange = this.onChange;
    settings.onAdd = (context, value, text, $selected) => { this.$emit('add', { context, value, text, $selected }) }
    settings.onRemove = (context, value, text, $selected) => { this.$emit('remove', { context, value, text, $selected }) }
    settings.onLabelSelect = (context, $selectedLabels) => { this.$emit('labelSelect', { context, $selectedLabels }) }
    settings.onLabelCreate = (context, value, text) => { this.$emit('labelCreate', { context, value, text }) }
    settings.onLabelRemove = (context, value) => { this.$emit('labelRemove', { context, value }) }
    settings.onNoResults = (context, searchTerm) => { this.$emit('noResults', { context, searchTerm }) }
    settings.onShow = (context) => { this.$emit('show', { context }) }
    settings.onHide = (context) => { this.$emit('hide', { context }) }

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

    this._dropdown = new DropdownModule(el, settings);

    this._dropdown.setSelected(this.value);
  },
  beforeUpdate()  {},
  updated()   {},
  beforeDestroy() {},
  destroyed() {}
}
</script>
