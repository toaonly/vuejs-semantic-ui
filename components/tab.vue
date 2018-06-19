<template>
<div class="ui menu">
  <slot></slot>
</div>
</template>

<script>
import { Tab, TabSettings } from './tab';

export default {
  name: 'su-tab',

  data()  {
    return {
      _tab: null,
      path: ''
    };
  },

  model: {
    prop: 'value'
  },

  props: {
    value: [ String, Number ],

    settings: {
      type: Object,
      default: () => ({}),
      required: false,
    },
  },

  watch: {
    value() {
      this.path = this.value;
    },

    path()  {
      this.$emit('input', this.path);
      this.$emit('change');
    }
  },

  methods: {
    attachEvents(selector, event) { return this._tab.attachEvents(selector, event); },
    changeTab(path) { return this._tab.changeTab(path); },
    setState(path) { return this._tab.setState(path); },
    getPath()  { return this._tab.getPath(); },
    isTab() { return this._tab.isTab(); },
    cacheRead(path)  { return this._tab.cacheRead(path); },
    cacheAdd(path, html) { return this._tab.cacheAdd(path, html); },
    cacheRemove(path)  { return this._tab.cacheRemove(path); },
  },

  beforeCreate() {},

  created() {},
  beforeMount() {},

  mounted() {
    /** @type {TabSettings} */
    let settings = this.settings;

    this.path = this.value;

    settings.onFirstLoad = (context, tabPath, parameterArray, historyEvent) => {
      this.$emit('firstLoad', { context, tabPath, parameterArray, historyEvent });
    };

    settings.onLoad = (context, tabPath, parameterArray, historyEvent) => {
      this.$emit('load', { context, tabPath, parameterArray, historyEvent });
    };

    settings.onRequest = (context, tabPath, parameterArray, historyEvent) => {
      this.$emit('request', { context, tabPath, parameterArray, historyEvent });
    };

    settings.onVisible = (context, tabPath, parameterArray, historyEvent) => {
      this.$emit('visible', { context, tabPath, parameterArray, historyEvent });
    };

    this._tab = new Tab(this.$el, this.settings);
  },
  beforeUpdate()  {},
  updated()   {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

