<template>
<div class="ui modal">
  <su-icon v-if="close" name="close" />
  <slot></slot>
</div>
</template>

<script>
import { Modal, ModalSettings } from './modal';

export default {
  name: 'semantic-ui-modal',

  data()  {
    return {
      _modal: null
    };
  },

  methods: {
    show()    { this._modal.show(); },
    hide()    { this._modal.hide(); },
    toggle()  { this._modal.toggle(); },
    refresh()  { this._modal.refresh(); },
    showDimmer()  { this._modal.showDimmer(); },
    hideDimmer()  { this._modal.hideDimmer(); },
    hideOthers()  { this._modal.hideOthers(); },
    hideAll()  { this._modal.hideAll(); },
    cacheSizes()  { this._modal.cacheSizes(); },
    canFit()  { this._modal.canFit(); },
    remove()  { this._modal.remove(); },
  },

  props: {
    close: Boolean,

    settings: {
      type: Object,
      default: () => ({}),
      required: false,
    },
  },

  beforeCrate() {},

  created() {},
  beforeMount() {},

  mounted() {
    /** @type {ModalSettings} */
    let settings = this.settings;

    settings.onShow = (context) => { this.$emit('show', { context }); };
    settings.onVisible = (context) => { this.$emit('visible', { context }); };
    settings.onHide = (context, $element) => { this.$emit('hide', { context, $element }); };
    settings.onHidden = (context) => { this.$emit('hidden', { context }); };
    settings.onApprove = (context, $element) => { this.$emit('approve', { context, $element }); };
    settings.onDeny = (context, $element) => { this.$emit('deny', { context, $element }); };

    let modal = new Modal(this.$el, settings);

    this._modal = modal;
  },
  beforeUpdate()  {},
  updated()   {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

