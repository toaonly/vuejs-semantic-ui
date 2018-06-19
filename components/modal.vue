<template>
<div class="ui modal">
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
    settings: {
      type: Object,
      default: null,
      required: false,
    },
  },

  beforeCrate() {},

  created() {},
  beforeMount() {},

  mounted() {
    this._modal = new Modal(this.$el, this.settings);
  },
  beforeUpdate()  {},
  updated()   {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

