<template>
<div class="ui labels">
  <slot></slot>
</div>
</template>

<script>
import { LabelGroup } from './label'

export default {
  name: 'su-label-group',

  props: {
    size: String,
    color: String,
    tag: Boolean,
    circular: [ Boolean, String ],
  },

  mounted() {
    let $el = this.$el,
      labelGroup = new LabelGroup(this.$props);

    if(labelGroup.size) $el.classList.add(labelGroup.size);
    if(labelGroup.color) $el.classList.add(labelGroup.color);
    if(labelGroup.tag) $el.classList.add('tag');
    if(labelGroup.circular) $el.classList.add(labelGroup.circular);
  }
}
</script>
