<template>
<label>
  <slot></slot>
</label>
</template>

<script>
export default {
  name: 'su-field-label',

  props: {
    for: String
  }
}
</script>
