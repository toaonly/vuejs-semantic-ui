import { SemanticUI, SemanticUISettings } from './semantic-ui';
import { isValid } from './util'

/**
 * @typedef ModalProps
 * @prop {boolean} basic
 * @prop {boolean} fullscreen
 * @prop {'mini' | 'tiny' | 'small' | 'large'} size
 * @prop {boolean} active
 *
 * @param {ModalProps} props
 */
function validateProps(props) {
  return {
    /**
     * @type {boolean}
     */
    props: (value => (isValid.boolean(value) ? value : void 0))(props.props),

    /**
     * @type {boolean}
     */
    fullscreen: (value => (isValid.boolean(value) ? value : void 0))(props.fullscreen),

    /**
     * @type {boolean}
     */
    active: (value => (isValid.boolean(value) ? value : void 0))(props.active),

    /**
     * @type {'mini' | 'tiny' | 'small' | 'large'}
     */
    size: (value => {
      if(isValid.string(value)) {
        switch (value.toLowerCase()) {
          case 'mini':
          case 'tiny':
          case 'small':
          case 'large':
            return `${value} size`;
          default:
            return void 0;
        }
      }

      return void 0;
    })(props.size)
  }
}

export class ModalSettings extends SemanticUISettings {
  constructor(settings = {
    detachable: true,
    autofocus: true,
    observeChanges: false,
    allowMultiple: false,
    keyboardShortcuts: true,
    offset: 0,
    useFlex: 'auto',
    context: 'body',
    closable: true,
    dimmerSettings: { closable: false, useCSS: true },
    transition: 'scale',
    duration: 400,
    queue: false,
    inverted: false,

    onShow: function () { },
    onVisible: function () { },
    onHide: function () { },
    onHidden: function () { },
    onApprove: function () { },
    onDeny: function () { },

    selector: {
      close: '.close, .actions .button:not(.positive):not(.approve):not(.ok):not(.negative):not(.deny):not(.cancel)',
      approve: '.actions .positive, .actions .approve, .actions .ok',
      deny: '.actions .negative, .actions .deny, .actions .cancel'
    },

    className: {
      active: 'active',
      scrolling: 'scrolling'
    },

    error: {
      method: 'The method you called is not defined.'
    },

    silent: false,
    debug: false,
    verbose: false,
    performance: true,
  }) {
    let self;

    super('Modal', 'modal');

    self = this;

    this.detachable = settings.detachable === false ? false : true;
    this.autofocus = settings.autofocus === false ? false : true;
    this.observeChanges = settings.observeChanges || false;
    this.allowMultiple = settings.allowMultiple || false;
    this.keyboardShortcuts = settings.keyboardShortcuts === false ? false : true;
    this.offset = settings.offset || 0;
    this.useFlex = settings.useFlex === false ? false : settings.useFlex || 'auto';
    this.context = settings.context || 'body';
    this.closable = settings.closable === false ? false : true;
    this.dimmerSettings = settings.dimmerSettings || { closable: false, useCSS: true };
    this.transition = settings.transition || 'scale';
    this.duration = settings.duration === 0 ? 0 : settings.duration;
    this.queue = settings.queue || false;
    this.inverted = settings.inverted || false;

    this.onShow = function(...args) {
      self.emit(this, settings.onShow, args);
    };
    this.onVisible = function(...args)  {
      self.emit(this, settings.onVisible, args);
    };
    this.onHide = function(...args) {
      self.emit(this, settings.onHide, args);
    };
    this.onHidden = function(...args) {
      self.emit(this, settings.onHidden, args);
    };
    this.onApprove = function(...args) {
      const e = new CustomEvent('suModal::Approve', { cancelable: true })

      Object.defineProperty(e, 'target', {
        get() { return args[0] }
      })

      self.emit(this, settings.onApprove, [ e ]);

      if(e.defaultPrevented) {
        return false
      }
    };
    this.onDeny = function(...args) {
      const e = new CustomEvent('suModal::Deny', { cancelable: true })

      Object.defineProperty(e, 'target', {
        get() { return args[0] }
      })

      self.emit(this, settings.onDeny, [ e ]);

      if(e.defaultPrevented) {
        return false
      }
    };

    settings.selector = settings.selector || {};
    settings.className = settings.className || {};

    this.selector = {
      close: settings.selector.close || '.close, .actions .button:not(.positive):not(.approve):not(.ok):not(.negative):not(.deny):not(.cancel)',
      approve: settings.selector.approve || '.actions .positive, .actions .approve, .actions .ok',
      deny: settings.selector.deny || '.actions .negative, .actions .deny, .actions .cancel'
    };

    this.className = {
      active: settings.className.active || 'active',
      scrolling: settings.className.scrolling || 'scrolling'
    };

    this.error = settings.error || {
      method: 'The method you called is not defined.'
    };

    this.silent = settings.silent || false;
    this.debug = settings.debug || false;
    this.verbose = settings.verbose || false;
    this.performance = settings.performance || true;
  };
};

export class Modal {
  /**
   * @param {ModalProps} props
   */
  constructor(props) {
    const validProps = validateProps(props);

    /** @type {boolean} */
    this.basic = validProps.basic;

    /** @type {boolean} */
    this.fullscreen = validProps.fullscreen;

    /** @type {'mini' | 'tiny' | 'small' | 'large'} */
    this.size = validProps.size;

    /** @type {boolean} */
    this.active = validProps.active;
  }

  /**
   * Generate class name
   *
   * @param {Modal} modal
   */
  static generateClassName(modal) {
    let className = 'ui';

    if(modal.basic) className += ` basic`;
    if(modal.fullscreen) className += ` fullscreen`;
    if(modal.size) className += ` ${modal.size}`;
    if(modal.active) className += ` active`;

    className += ' modal';

    return className;
  }
}

export class ModalModule extends SemanticUI {
  /**
   * Semantic UI Modal
   *
   * @param {HTMLElement} el
   * @param {ModalSettings} settings
   */
  constructor(el, settings = new ModalSettings)   {
    super('modal');

    this.$el = $(el);
    this._settings;

    this.initialize(settings);
  };

  initialize(settings = new ModalSettings) {
    if (!(settings instanceof ModalSettings)) {
      settings = new ModalSettings(settings || undefined);
    }

    this._settings = settings;

    $(this.$el).modal(settings.toJSON());
  };

  set setting(settings = new ModalSettings) {
    this._settings = settings;
  };

  show()    { return this._behavior('show'); };
  hide()    { return this._behavior('hide'); };
  toggle()  { return this._behavior('toggle'); };
  refresh()  { return this._behavior('refresh'); };
  showDimmer()  { return this._behavior('show dimmer'); };
  hideDimmer()  { return this._behavior('hide dimmer'); };
  hideOthers()  { return this._behavior('hide others'); };
  hideAll()  { return this._behavior('hide all'); };
  cacheSizes()  { return this._behavior('cache sizes'); };
  canFit()  { return this._behavior('can fit'); };
  remove()  { this.$el.remove(); };
};
