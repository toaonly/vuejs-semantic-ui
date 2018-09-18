import { SemanticUI, SemanticUISettings } from './semantic-ui'

let validateProps = (props = {
  /** @type {boolean} */
  page,

  /** @type {boolean} */
  active,

  /** @type {boolean} */
  disabled,

  /** @type {boolean} */
  blurring,

  /** @type {boolean} */
  inverted,

  /** @type {boolean} */
  simple,

  /**
   * @enum 'top' | 'bottom'
   * @type {string}
   */
  aligned,
}) => {
  return {
    /**
     * @type {boolean}
     */
    page: (value => (isValid.boolean(value) ? value : void 0))(props.page),

    /**
     * @type {boolean}
     */
    active: (value => (isValid.boolean(value) ? value : void 0))(props.active),

    /**
     * @type {boolean}
     */
    disabled: (value => (isValid.boolean(value) ? value : void 0))(props.disabled),

    /**
     * @type {boolean}
     */
    blurring: (value => (isValid.boolean(value) ? value : void 0))(props.blurring),

    /**
     * @type {boolean}
     */
    inverted: (value => (isValid.boolean(value) ? value : void 0))(props.inverted),

    /**
     * @type {boolean}
     */
    simple: (value => (isValid.boolean(value) ? value : void 0))(props.simple),

    /**
     * @enum 'top' | 'bottom'
     * @type {string}
     */
    aligned: (value => {
      switch (value.toLowerCase()) {
        case 'top':
        case 'bottom':
          return `${value} aligned`;
        default:
          return void 0;
      }
    })(props.aligned)
  }
}

export class DimmerSettings extends SemanticUISettings {
  constructor(settings = {
    silent: false,
    debug: false,
    verbose: false,
    performance: true,

    // name to distinguish between multiple dimmers in context
    dimmerName: false,

    // whether to add a variation type
    variation: false,

    // whether to bind close events
    closable: 'auto',

    // whether to use css animations
    useCSS: true,

    // css animation to use
    transition: 'fade',

    // event to bind to
    on: false,

    // overriding opacity value
    opacity: 'auto',

    // transition durations
    duration: {
      show: 500,
      hide: 500
    },

    onChange: function () { },
    onShow: function () { },
    onHide: function () { },

    error: {
      method: 'The method you called is not defined.'
    },

    className: {
      active: 'active',
      animating: 'animating',
      dimmable: 'dimmable',
      dimmed: 'dimmed',
      dimmer: 'dimmer',
      disabled: 'disabled',
      hide: 'hide',
      pageDimmer: 'page',
      show: 'show'
    },

    selector: {
      dimmer: '> .ui.dimmer',
      content: '.ui.dimmer > .content, .ui.dimmer > .content > .center'
    },

    template: {
      dimmer: function () {
        return $('<div />').attr('class', 'ui dimmer');
      }
    }
  }) {
    let self;

    super('Dimmer', 'dimmer');

    self = this;

    // name to distinguish between multiple dimmers in context
    this.dimmerName = settings.dimmerName || false;

    // whether to add a variation type
    this.variation = settings.variation || false;

    // whether to bind close events
    this.closable = settings.closable === false ? false : settings.closable || 'auto';

    // whether to use css animations
    this.useCSS = settings.useCSS || true;

    // css animation to use
    this.transition = settings.transition || 'fade';

    // event to bind to
    this.on = settings.on === false ? false : (settings.on || false);

    // overriding opacity value
    this.opacity = settings.opacity === 0 ? 0 : settings.opacity || 'auto';

    // transition durations
    settings.duration = settings.duration || {};

    this.duration = {
      show: settings.duration.show === 0 ? 0 : (settings.duration.show || 500),
      hide: settings.duration.hide === 0 ? 0 : (settings.duration.hide || 500)
    },

    this.onChange = function(...args)  {
      self.emit(this, settings.onChange, args);
    };
    this.onShow = function(...args)  {
      self.emit(this, settings.onShow, args);
    };
    this.onHide = function(...args)  {
      self.emit(this, settings.onHide, args);
    };

    this.error = settings.error || {
      method: 'The method you called is not defined'
    };

    settings.className = settings.className || {}

    this.className = {
      active: settings.className.active || 'active',
      animating: settings.className.animating || 'animating',
      dimmable: settings.className.dimmable || 'dimmable',
      dimmed: settings.className.dimmed || 'dimmed',
      dimmer: settings.className.dimmer || 'dimmer',
      disabled: settings.className.disabled || 'disabled',
      hide: settings.className.hide || 'hide',
      pageDimmer: settings.className.pageDimmer || 'page',
      show: settings.className.show || 'show'
    };

    settings.selector = settings.selector || {};

    this.selector = {
      dimmer: settings.selector.dimmer || '> .ui.dimmer',
      content: settings.selector.content || '.ui.dimmer > .content, .ui.dimmer > .content > .center'
    };

    settings.template = settings.template || {};

    this.template = {
      dimmer: settings.template.dimmer || function() {
        return $('<div />').attr('class', 'ui dimmer');
      }
    };

    this.silent = settings.silent || false;
    this.debug = settings.debug || false;
    this.verbose = settings.verbose || false;
    this.performance = settings.performance || true;
  }
};

export class Dimmer extends SemanticUI {
  /**
   * Semantic UI Dimmer
   *
   * @param {HTMLElement} el
   * @param {DimmerSettings} settings
   */
  constructor(el, settings) {
    super('dimmer');

    /** @type {JQuery} */
    this.$el// = $(el);

    /** @type {DimmerSettings} */
    this._settings;

    /**
     * @default false
     * @type {boolean}
     */
    this.page = false;

    /**
     * @default false
     * @type {boolean}
     */
    this.active = false;

    /**
     * @default false
     * @type {boolean}
     */
    this.disabled = false;

    /**
     * @default false
     * @type {boolean}
     */
    this.blurring = false;

    /**
     * @default false
     * @type {boolean}
     */
    this.inverted = false;

    /**
     * @default false
     * @type {boolean}
     */
    this.simple = false;

    /**
     * @enum 'top' | 'bottom'
     * @type {string}
     */
    this.aligned;
  };

  /**
   * @param {DimmerSettings} settings
   */
  initialize(el, settings) {
    this.$el = $(el);
    this.setSettings(settings);

    this.$el.dimmer(settings || this._settings.toJSON());
  };

  /**
   * @param {DimmerSettings} settings
   */
  setSettings(settings) {
    if (!(settings instanceof DimmerSettings)) {
      settings = new DimmerSettings(settings || {});
    }

    this._settings = settings;
  };

  setProps(props)  {
    let validProps = validateProps(props);

    this.page = validProps.page;
    this.active = validProps.active;
    this.disabled = validProps.disabled;
    this.blurring = validProps.blurring;
    this.inverted = validProps.inverted;
    this.simple = validProps.simple;
    this.aligned = validProps.aligned;
  };

  /** @param {HTMLElement} element */
  addContent(element) { this._behavior('add content', element); };

  show() { this._behavior('show'); };
  hide() { this._behavior('hide'); };
  toggle() { this._behavior('toggle'); };

  /** @param {number} opacity */
  setOpacity(opacity) { this._behavior('set opacity', opacity); };

  create() { return this._behavior('create'); };
  getDuration() { return this._behavior('get duration'); };
  getDimmer() { return this._behavior('get dimmer'); };
  hasDimmer() { return this._behavior('has dimmer'); };
  isActive() { return this._behavior('is active'); };
  isAnimating() { return this._behavior('is animating'); };
  isDimmer() { return this._behavior('is dimmer'); };
  isDimmable() { return this._behavior('is dimmable'); };
  isDisabled() { return this._behavior('is disabled'); };
  isEnabled() { return this._behavior('is enabled'); };
  isPage() { return this._behavior('is page'); };
  isPageDimmer() { return this._behavior('is page dimmer'); };
  setActive() { this._behavior('set active'); };
  setDimmable() { this._behavior('set dimmable'); };
  setDimmed() { this._behavior('set dimmed'); };
  setPageDimmer() { this._behavior('set page dimmer'); };
  setDisabled() { this._behavior('set disabled'); };
  canShow() { return this._behavior('can show'); };

  /**
   * Generate class name
   *
   * @param {Dimmer} dimmer
   */
  static generateClassName(dimmer) {
    let className = 'ui';

    if(dimmer.page) className += ` page`;
    if(dimmer.active) className += ` active`;
    if(dimmer.disabled) className += ` disabled`;
    if(dimmer.blurring) className += ` blurring`;
    if(dimmer.inverted) className += ` inverted`;
    if(dimmer.simple) className += ` simple`;
    if(dimmer.aligned) className += ` ${dimmer.aligned}`;

    className += ' dimmer';

    return className;
  }
}
