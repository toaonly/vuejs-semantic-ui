<template>
<div class="ui images">
  <slot></slot>
</div>
</template>

<script>
import { ImageGroup } from './image'

export default {
  name: 'su-image-group',

  props: {
    size: String
  },

  mounted() {
    let el = this.$el,
      imageGroup = new ImageGroup(this.$props);

    if(imageGroup.size) el.classList.add(imageGroup.size);
  }
}
</script>
