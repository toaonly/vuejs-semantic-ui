<template>
<div>
  <div class="ui tabular menu">
    <su-item
      v-for="(tab, index) in tabs"
      :key="index"
      :data-tab="tab.value"
      tag="a">
      {{ tab.name }}
    </su-item>
  </div>
  <slot></slot>
</div>
</template>

<script>
import SuItem from './item.vue';
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

    tabs: Array,

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

  components: {
    SuItem
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

    this.$children.forEach($child => {
      if($child.$vnode.componentOptions.tag !== 'su-item') {
        $child.$el.classList.add('tab');
      }
    });

    this._tab = new Tab(this.$el, this.settings);
  },
  beforeUpdate()  {},
  updated()   {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

