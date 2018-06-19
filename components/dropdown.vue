<template>

</template>

<script>
import { Dropdown, DropdownSettings } from './dropdown'
export default {
  name: 'su-dropdown',

  data()  {
    return {
      /** @type {Dropdown} */
      _dropdown: null
    }
  },

  model: {
    prop: 'value'
  },

  props: {
    value: [ String, Number ],

    selection: Boolean,
    search: Boolean,
    multiple: Boolean,
    inline: Boolean,
    pointing: Boolean,
    floating: Boolean,
    simple: Boolean,
    labeled: Boolean,
    loading: Boolean,
    error: Boolean,
    active: Boolean,
    disabled: Boolean,
    scrolling: Boolean,
    compact: Boolean,
    fluid: Boolean,

    icon: String,

    settings: Object,
  }
}
</script>
