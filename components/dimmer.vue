<template>
<div :class="'ui dimmer' + (inverted ? ' inverted' : '')">
  <slot></slot>
</div>
</template>

<script>
import { Dimmer, DimmerSettings } from './dimmer'

export default {
  name: 'su-dimmer',

  data()  {
    return {
      _dimmer: null,
      active: false,
    }
  },

  model: {
    prop: 'value'
  },

  props: {
    value: Boolean,

    inverted: Boolean,

    settings: {
      type: Object,
      default: () => ({}),
      required: false,
    },
  },

  computed: {
    classToString() {
      let classToString = this.class;

      if(this.class instanceof Array) {
        classToString = this.class.join(' ');
      }

      return classToString;
    }
  },

  methods: {
    /** @param {HTMLElement} element */
    addContent(element) { this._dimmer.addContent(element); },

    show() { this._dimmer.show(); },
    hide() { this._dimmer.hide(); },
    toggle() { this._dimmer.toggle(); },

    /** @param {number} opacity */
    setOpacity(opacity) { this._dimmer.setOpacity(opacity); },

    create() { return this._dimmer.create(); },
    getDuration() { return this._dimmer.getDuration(); },
    getDimmer() { return this._dimmer.getDimmer(); },
    hasDimmer() { return this._dimmer.hasDimmer(); },
    isActive() { return this._dimmer.isActive(); },
    isAnimating() { return this._dimmer.isAnimating(); },
    isDimmer() { return this._dimmer.isDimmer(); },
    isDimmable() { return this._dimmer.isDimmable(); },
    isDisabled() { return this._dimmer.isDisabled(); },
    isEnabled() { return this._dimmer.isEnabled(); },
    isPage() { return this._dimmer.isPage(); },
    isPageDimmer() { return this._dimmer.isPageDimmer(); },
    setActive() { this._dimmer.setActive(); },
    setDimmable() { this._dimmer.setDimmable(); },
    setDimmed() { this._dimmer.setDimmed(); },
    setPageDimmer() { this._dimmer.setPageDimmer(); },
    setDisabled() { this._dimmer.setDisabled(); },
    canShow() { return this._dimme.canShow(); }
  },

  watch: {
    value() {
      this.active = this.value;
    },

    active() {
      if(this.active) this.show();
      else this.hide();

      this.$emit('input', this.active);
      this.$emit('change', { context: this.$el });
    }
  },

  beforeCreate() {},
  created() {},
  beforeMount() {},

  mounted() {
    /** @type {DimmerSettings} */
    let settings = this.settings;

    settings.onShow = (context) => {
      this.active = true;
      this.$emit('show', { context });
    };
    settings.onHide = (context) => {
      this.active = false;
      this.$emit('hide', { context });
    };

    this._dimmer = new Dimmer(this.$el, this.settings);
  },

  beforeUpdate()  {},
  updated()   {},
  beforeDestroy() {},
  destroyed() {}
}
</script>
