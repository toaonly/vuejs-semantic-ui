<template>
<div class="ui checkbox">
  <input
    v-model="checked"
    :id="id"
    :type="type"
    :name="name"
    :disabled="disabled"
    :readonly="readonly"
    :value="val"
  />
  <label>{{label}}</label>
</div>
</template>

<script>
import { Checkbox, CheckboxSettings } from './checkbox';

export default {
  name: 'su-checkbox',

  data()  {
    return {
      /** @type {Checkbox} */
      _checkbox: null,

      /** @type {boolean} */
      checked: false,
    };
  },

  model: {
    prop: 'value',
  },

  props: {
    value: [ Boolean, String, Number, Array ],

    type: {
      type: String,
      default: 'checkbox',
      required: false
    },

    label: String,

    name: String,
    id: String,

    disabled: Boolean,
    readonly: Boolean,
    toggle: Boolean,
    slider: Boolean,
    fitted: Boolean,

    settings: {
      type: Object,
      default: () => ({}),
      required: false,
    },

    val: {
      type: [ String, Number, Boolean ],
      default: undefined,
      required: false
    }
  },

  methods: {
    /**
     * @param {string} behavior
     * @param {any[]} args
     */
    checkbox(behavior, ...args)  {
      let _behavior = behavior.split(' ').map((s, i) => {
        if(i > 0)	{
          let sf = s[0].toUpperCase();
          return sf + s.substr(1);
        }

        return s;
      }).join('');

      /** @type {function} */
      let behaviorMethod = this[`_${_behavior}`];

      if(typeof behaviorMethod === 'function') {
        behaviorMethod.apply(this, args);
      }
    },

    _toggle()  { this._checkbox.toggle() },
    _check() { this._checkbox.check() },
    _uncheck() { this._checkbox.uncheck() },
    _indeterminate() { this._checkbox.indeterminate() },
    _determinate() { this._checkbox.determinate() },
    _enable()  { this._checkbox.enable() },
    _disable()  { this._checkbox.disable() },
    _setChecked() { this._checkbox.setChecked() },
    _setUnchecked() { this._checkbox.setUnchecked() },
    _setIndeterminate() { this._checkbox.setIndeterminate() },
    _setDeterminate() { this._checkbox.setDeterminate() },
    _setEnabled() { this._checkbox.setEnabled() },
    _setDisabled()  { this._checkbox.setDisabled() },

    /**
     * @param {string} selector
     * @param {string} behavior
     */
    _attachEvents(selector, behavior) { this._checkbox.attachEvents(selector, behavior) },

    /**
     * @returns {boolean}
     */
    _isRadio() { return this._checkbox.isRadio(); },

    /**
     * @returns {boolean}
     */
    _isChecked() { return this._checkbox.isChecked(); },

    /**
     * @returns {boolean}
     */
    _isUnchecked() { return this._checkbox.isUnchecked(); },

    /**
     * @returns {boolean}
     */
    _canChange() { return this._checkbox.canChange(); },

    /**
     * @returns {boolean}
     */
    _shouldAllowCheck() { return this._checkbox.shouldAllowCheck(); },

    /**
     * @returns {boolean}
     */
    _shouldAllowUncheck() { return this._checkbox.shouldAllowUncheck(); },

    /**
     * @returns {boolean}
     */
    _shouldAllowDeterminate() { return this._checkbox.shouldAllowDeterminate(); },

    /**
     * @returns {boolean}
     */
    _shouldAllowIndeterminate() { return this._checkbox.shouldAllowIndeterminate(); },

    /**
     * @returns {boolean}
     */
    _canUncheck() { return this._checkbox.canUncheck() },
  },

  watch: {
    value() {
      this.checked = this.value;
    },

    checked() {
      this.$emit('input', this.checked);
      this.$emit('change', { context: this.$el });
    }
  },

  beforeCreate() {},
  created() {},
  beforeMount() {},

  mounted() {
    /** @type {CheckboxSettings} */
    let settings = this.settings;

    /** @type {HTMLElement} */
    let el = this.$el;

    if(this.toggle) el.className += ` toggle`;
    if(this.slider) el.className += ` slider`;
    if(this.fitted) el.className += ` fitted`;

    this.checked = this.value;

    if(this.type === 'radio')  el.classList.add('radio');

    settings.onChecked = (context) => { this.$emit('checked', { context }); };
    settings.onUnchecked = (context) => { this.$emit('unchecked', { context }); };

    settings.onIndeterminate = (context) => { this.$emit('indeterminate', { context }); };
    settings.onDeterminate = (context) => { this.$emit('determinate', { context }); };

    settings.onEnable = (context) => { this.$emit('enable', { context }); };
    settings.onDisable = (context) => { this.$emit('disable', { context }); };

    settings.onEnabled = (context) => { this.$emit('enabled', { context }); };
    settings.onDisabled = (context) => { this.$emit('disabled', { context }); };

    this._checkbox = new Checkbox(el, this.settings);
  },

  beforeUpdate()  {},
  updated()   {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

