<script>
import { CreateElement } from 'vue'
import { Dimmer, DimmerSettings } from './dimmer'

export default {
  name: 'su-dimmer',

  data()  {
    return {
      /** @type {Dimmer} */
      _dimmer: null,

      _active: false,
    }
  },

  model: {
    prop: 'value'
  },

  props: {
    value: Boolean,

    page: Boolean,
    active: Boolean,
    disabled: Boolean,
    blurring: Boolean,
    inverted: Boolean,
    simple: Boolean,

    aligned: String,

    settings: {
      type: Object,
      default: () => ({}),
      required: false,
    },
  },

  methods: {
    /**
     * @param {string} behavior
     * @param {any[]} args
     */
    dimmer(behavior, ...args) {
      const _behavior = behavior.split(' ').map((s, i) => {
        if(i > 0) {
          const sf = s[0].toUpperCase();

          return sf + s.substr(1);
        }

        return s;
      }).join('');

      /** @type {function} */
      const behaviorMethod = this[`${_behavior}`];

      if(typeof behaviorMethod === 'function') {
        behaviorMethod.apply(this, args);
      }
    },

    /** @param {HTMLElement} element */
    addContent(element) { this._dimmer.addContent(element); },

    show() { this._dimmer.show(); },
    hide() { this._dimmer.hide(); },
    toggle() { this._dimmer.toggle(); },

    /** @param {number} opacity */
    setOpacity(opacity) { this._dimmer.setOpacity(opacity); },

    create() { return this._dimmer.create(); },
    getDuration() { return this._dimmer.getDuration(); },
    getDimmer() { return this._dimmer.getDimmer(); },
    hasDimmer() { return this._dimmer.hasDimmer(); },
    isActive() { return this._dimmer.isActive(); },
    isAnimating() { return this._dimmer.isAnimating(); },
    isDimmer() { return this._dimmer.isDimmer(); },
    isDimmable() { return this._dimmer.isDimmable(); },
    isDisabled() { return this._dimmer.isDisabled(); },
    isEnabled() { return this._dimmer.isEnabled(); },
    isPage() { return this._dimmer.isPage(); },
    isPageDimmer() { return this._dimmer.isPageDimmer(); },
    setActive() { this._dimmer.setActive(); },
    setDimmable() { this._dimmer.setDimmable(); },
    setDimmed() { this._dimmer.setDimmed(); },
    setPageDimmer() { this._dimmer.setPageDimmer(); },
    setDisabled() { this._dimmer.setDisabled(); },
    canShow() { return this._dimme.canShow(); }
  },

  watch: {
    value() {
      this._active = this.value;
    },

    _active() {
      if(this._active) this.show();
      else this.hide();

      this.$emit('input', this._active);
      this.$emit('change', { context: this.$el });
    }
  },

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    const children = [ this.$slots.default ];

    this._dimmer = new Dimmer;
    this._dimmer.setProps({
      page: this.page,
      active: this.active,
      disabled: this.disabled,
      blurring: this.blurring,
      inverted: this.inverted,
      simple: this.simple,
      aligned: this.aligned
    });

    return createElement(
      'div',
      {
        class: Dimmer.generateClassName(this._dimmer)
      },
      children
    )
  },

  mounted() {
    /** @type {DimmerSettings} */
    const settings = this.settings;

    settings.onShow = (context) => {
      this._active = true;
      this.$emit('show', { context });
    };

    settings.onHide = (context) => {
      this._active = false;
      this.$emit('hide', { context });
    };

    if(this._dimmer.blurring) {
      this.$parent.$el.classList.add('blurring');
    }

    this._dimmer.initialize(this.$el, this.settings);
  }
}
</script>
