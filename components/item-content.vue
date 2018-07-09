<template>
<div :class="className">
  <slot></slot>
</div>
</template>

<script>
import { ItemContent } from './item'

export default {
  name: 'su-content',

  data()  {
    return {
      className: ''
    }
  },

  props: {
    aligned: String,
    floated: String,
  },

  created() {
    let itemContent = new ItemContent(this.$props);

    if(itemContent.aligned) this.className += `${itemContent.aligned} aligned `
    if(itemContent.floated) this.className += `${itemContent.floated} floated `

    className += 'content'
  }
}
</script>
