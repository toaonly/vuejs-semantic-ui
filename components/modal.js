import { SemanticUI, SemanticUISettings } from './semantic-ui';

export class ModalSettings extends SemanticUISettings {
  constructor(settings = {
    detachable: true,
    autofocus: true,
    observeChanges: false,
    allowMultiple: false,
    keyboardShortcuts: true,
    offset: 0,
    context: 'body',
    closable: true,
    dimmerSettings: { closable: false, useCSS: true },
    transition: 'scale',
    duration: 500,
    queue: false,
    inverted: false,

    onShow: function () { },
    onVisible: function () { },
    onHide: function () { },
    onHidden: function () { },
    onApprove: function () { },
    onDeny: function () { },

    selector: {
      close: '.close, .actions .button',
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

    this.detachable = settings.detachable || true;
    this.autofocus = settings.autofocus || true;
    this.observeChanges = settings.observeChanges || false;
    this.allowMultiple = settings.allowMultiple || false;
    this.keyboardShortcuts = settings.keyboardShortcuts || true;
    this.offset = settings.offset || 0;
    this.context = settings.context || 'body';
    this.closable = settings.closable || true;
    this.dimmerSettings = settings.dimmerSettings || { closable: false, useCSS: true };
    this.transition = settings.transition || 'scale';
    this.duration = settings.duration || 500;
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
    this.onApprove = function(...args)  {
      self.emit(this, settings.onApprove, args);
    };
    this.onDeny = function(...args) {
      self.emit(this, settings.onDeny, args);
    };

    settings.selector = settings.selector || {};
    settings.className = settings.className || {};

    this.selector = {
      close: settings.selector.close || '.close, .actions .button',
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

export class Modal extends SemanticUI {
  constructor(el, settings = new ModalSettings)   {
    super('modal');

    this.$el = $(el);

    this.initialize(settings);
  };

  initialize(settings = new ModalSettings) {
    if (!(settings instanceof ModalSettings)) {
      settings = new ModalSettings(settings || undefined);
    }

    this.$el.modal(settings.toJSON());
  };

  set setting(settings = new ModalSettings) {
    this.initialize(settings);
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
