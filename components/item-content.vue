<template>
<div
  @click="(e) => this.eventHandler(e, 'click')"
  class="content">
  <slot></slot>
</div>
</template>

<script>
import { ItemContent } from './item'

export default {
  name: 'su-item-content',

  props: {
    aligned: String,
    floated: String,
  },

  methods: {
    eventHandler(e, name)  {
      this.$emit(name, e);
    }
  },

  mounted() {
    let $el = this.$el,
      itemContent = new ItemContent(this.$props);

    if(itemContent.aligned) $el.className += ` ${itemContent.aligned} aligned`
    if(itemContent.floated) $el.className += ` ${itemContent.floated} floated`
  }
}
</script>
