import { SemanticUI, SemanticUISettings } from './semantic-ui'

export class CheckboxSettings extends SemanticUISettings {
  constructor(settings = {
    uncheckable: 'auto',
    fireOnInit: false,

    onChange: function()  {},

    onChecked: function() {},
    onUnchecked: function() {},

    onIndeterminate: function() {},
    onDeterminate: function() {},

    beforeChecked: function() {},
    beforeUnchecked: function() {},
    beforeIndeterminate: function() {},
    beforeDeterminate: function() {},

    onEnable: function()  {},
    onDisable: function() {},

    onEnabled: function () {},
    onDisabled: function () {},

    selector: {
      checkbox: '.ui.checkbox',
      label: 'label, .box',
      input: 'input[type="checkbox"], input[type="radio"]',
      link: 'a[href]'
    },
    className: {
      checked: 'checked',
      indeterminate: 'indeterminate',
      disabled: 'disabled',
      hidden: 'hidden',
      radio: 'radio',
      readOnly: 'read-only'
    },

    silent: false,
    debug: false,
    performance: true,
    verbose: false,

    error: {
      method: 'The method you called is not defined'
    },
  }) {
    let self;

    super('Checkbox', 'checkbox');

    self = this;

    this.uncheckable = settings.uncheckable === false ? false : (settings.uncheckable || 'auto')
    this.fireOnInit = settings.fireOnInit || false;

    this.onChange = function(...args) {
      self.emit(this, settings.onChange, args);
    },
    this.onChecked = function(...args) {
      self.emit(this, settings.onChecked, args);
    },
    this.onUnchecked = function(...args) {
      self.emit(this, settings.onUnchecked, args);
    },
    this.onIndeterminate = function(...args) {
      self.emit(this, settings.onIndeterminate, args);
    },
    this.onDeterminate = function(...args) {
      self.emit(this, settings.onDeterminate, args);
    },
    this.beforeChecked = settings.beforeChecked || undefined,
    this.beforeUnchecked = settings.beforeUnchecked || undefined,
    this.beforeIndeterminate = settings.beforeIndeterminate || undefined,
    this.beforeDeterminate = settings.beforeDeterminate || undefined,
    this.onEnable = function(...args) {
      self.emit(this, settings.onEnable, args);
    },
    this.onDisable = function(...args) {
      self.emit(this, settings.onDisable, args);
    },
    this.onEnabled = function(...args) {
      self.emit(this, settings.onEnabled, args);
    },
    this.onDisabled = function(...args) {
      self.emit(this, settings.onDisabled, args);
    },

    settings.selector = settings.selector || {};
    settings.className = settings.className || {};

    this.selector = {
      checkbox: settings.selector.checkbox || '.ui.checkbox',
      input: settings.selector.input || 'input[type=checkbox], input[type=radio]',
      label: settings.selector.label || 'label',
      link: settings.selector.link || 'a[href]',
    };

    this.className = {
      checked: settings.className.checked   || 'checked',
      indeterminate: settings.className.indeterminate || 'indeterminate',
      disabled: settings.className.disabled || 'disabled',
      hidden: settings.className.hidden || 'hidden',
      radio: settings.className.radio || 'radio',
      readOnly: settings.className.readOnly || 'read-only',
    };

    this.error = settings.error || {
      method: 'The method you called is not defined'
    };

    this.silent = settings.silent || false;
    this.debug = settings.debug || false;
    this.performance = settings.performance || true;
    this.verbose = settings.verbose || false;
  };
};

export class Checkbox extends SemanticUI {
  /**
   * Semantic UI Checkbox
   *
   * @param {HTMLElement} el
   * @param {CheckboxSettings} settings
   */
  constructor(el, settings) {
    super('checkbox');

    /** @type {JQuery} */
    this.$el = $(el);

    /** @type {CheckboxSettings} */
    this._settings;

    this.setSettings(settings);
  };

  /**
   * @param {CheckboxSettings} settings
   */
  initialize(settings) {
    this.$el.checkbox(settings || this._settings.toJSON());
  };

  /**
   * @param {CheckboxSettings} settings
   */
  setSettings(settings) {
    if (!(settings instanceof CheckboxSettings)) {
      settings = new CheckboxSettings(settings || {});
    }

    this._settings = settings;

    this.initialize();
  };

  toggle()  { this._behavior('toggle') }
  check() { this._behavior('check') }
  uncheck() { this._behavior('uncheck') }
  indeterminate() { this._behavior('indeterminate') }
  determinate() { this._behavior('determinate') }
  enable()  { this._behavior('enable') }
  disable()  { this._behavior('disable') }
  setChecked() { this._behavior('set checked') }
  setUnchecked() { this._behavior('set unchecked') }
  setIndeterminate() { this._behavior('set indeterminate') }
  setDeterminate() { this._behavior('set determinate') }
  setEnabled() { this._behavior('set enabled') }
  setDisabled()  { this._behavior('set disabled') }

  /**
   * @param {string} selector
   * @param {string} behavior
   */
  attachEvents(selector, behavior)  { this._behavior('attach events', selector, behavior) }

  /**
   * @returns {boolean}
   */
  isRadio()  { return this._behavior('is radio') }

  /**
   * @returns {boolean}
   */
  isChecked()  { return this._behavior('is checked') }

  /**
   * @returns {boolean}
   */
  isUnchecked()  { return this._behavior('is unchecked') }

  /**
   * @returns {boolean}
   */
  canChange()  { return this._behavior('can change') }

  shouldAllowCheck()  { return this._behavior('should allow check') }
  shouldAllowUncheck()  { return this._behavior('should allow uncheck') }
  shouldAllowDeterminate()  { return this._behavior('should allow determinate') }
  shouldAllowIndeterminate()  { return this._behavior('should allow indeterminate') }

  /**
   * @returns {boolean}
   */
  canUncheck() { return this._behavior('can uncheck') }
};
