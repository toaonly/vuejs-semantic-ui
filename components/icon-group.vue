<template>
<i :class="'icons' + className">
  <slot></slot>
</i>
</template>

<script>
import IconGroup from './icon'

export default {
  name: 'su-icon-group',

  data() {
    return {
      className: ''
    }
  },

  props: {
    size: String
  },

  created() {
    let className = '',
      iconGroup = new IconGroup(this.$props);

    if(iconGroup.size)  className += ` ${iconGroup.size}`

    this.className = className;
  }
}
</script>
