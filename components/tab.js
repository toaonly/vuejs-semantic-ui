import { SemanticUI, SemanticUISettings } from './semantic-ui';

export class TabSettings extends SemanticUISettings {
  constructor(settings = {
    auto: false,
    history: false,
    historyType: 'hash',
    path: false,

    context: false,
    childrenOnly: false,
    maxDepth: 25,

    deactivate: 'siblings',

    alwaysRefresh: false,
    cache: true,
    loadOnce: false,
    cacheType: 'response',
    ignoreFirstLoad: false,

    apiSettings: false,
    evaluateScripts: 'once',

    onFirstLoad: function (tabPath, parameterArray, historyEvent) { },
    onLoad: function (tabPath, parameterArray, historyEvent) { },
    onVisible: function (tabPath, parameterArray, historyEvent) { },
    onRequest: function (tabPath, parameterArray, historyEvent) { },

    templates: {
      // returns page title
      determineTitle: function (tabArray) { }
    },

    selector: {
      tabs: '.ui.tab',
      parent: '.ui:not(.menu)',
      ui: '.ui'
    },

    metadata: {
      tab: 'tab',
      loaded: 'loaded',
      promise: 'promise'
    },

    className: {
      loading: 'loading',
      active: 'active'
    },

    error: {
      api: 'You attempted to load content without API module',
      method: 'The method you called is not defined',
      missingTab: 'Activated tab cannot be found for this context.',
      noContent: 'The tab you specified is missing a content url.',
      path: 'History enabled, but no path was specified',
      recursion: 'Max recursive depth reached',
      state: 'The state library has not been initialized'
    },

    silent: false,
    debug: false,
    verbose: false,
    performance: true,
  }) {
    let self;

    super('Tab', 'tab');

    self = this;

    this.auto = settings.auto || false;
    this.deactivate = settings.deactivate || 'siblings';
    this.history = settings.history || false;
    this.ignoreFirstLoad = settings.ignoreFirstLoad || false;
    this.evaluateScripts = settings.evaluateScripts || 'once';
    this.alwaysRefresh = settings.alwaysRefresh || false;
    this.cacheType = settings.cacheType || 'response';
    this.cache = settings.cache || true;
    this.apiSettings = settings.apiSettings || false;
    this.historyType = settings.historyType || 'hash';
    this.path = settings.path || false;
    this.context = settings.context || false;
    this.childrenOnly = settings.childrenOnly || false;
    this.loadOnce = settings.loadOnce || false;
    this.maxDepth = settings.maxDepth || 25;

    this.onFirstLoad = function(tabPath, parameterArray, historyEvent) {
      self.emit(this, settings.onFirstLoad, [ tabPath, parameterArray, historyEvent ]);
    },
    this.onLoad = function(tabPath, parameterArray, historyEvent) {
      self.emit(this, settings.onLoad, [ tabPath, parameterArray, historyEvent ]);
    },
    this.onVisible = function(tabPath, parameterArray, historyEvent) {
      self.emit(this, settings.onVisible, [ tabPath, parameterArray, historyEvent ]);
    },
    this.onRequest = function(tabPath, parameterArray, historyEvent) {
      self.emit(this, settings.onRequest, [ tabPath, parameterArray, historyEvent ]);
    },

    this.templates = settings.templates || {
      // returns page title
      determineTitle: function (tabArray) { }
    };

    settings.selector = settings.selector || {};
    settings.metadata = settings.metadata || {};
    settings.className = settings.className || {};

    this.selector = {
      tabs: settings.selector.tabs || '.ui.tab',
      parent: settings.selector.parent || '.ui:not(.menu)',
      ui: settings.selector.ui || '.ui'
    };

    this.metadata = {
      tab: settings.metadata.tab || 'tab',
      loaded: settings.metadata.loaded || 'loaded',
      promise: settings.metadata.promise || 'promise'
    };

    this.className = {
      loading: settings.className.loading || 'loading',
      active: settings.className.active || 'active'
    };

    this.error = settings.error || {
      api: 'You attempted to load content without API module',
      method: 'The method you called is not defined',
      missingTab: 'Activated tab cannot be found for this context.',
      noContent: 'The tab you specified is missing a content url.',
      path: 'History enabled, but no path was specified',
      recursion: 'Max recursive depth reached',
      state: 'The state library has not been initialized'
    };

    this.silent = settings.silent || false;
    this.debug = settings.debug || false;
    this.verbose = settings.verbose || false;
    this.performance = settings.performance || true;
  };
};

export class Tab extends SemanticUI {
  /**
   * Semantic UI Tab
   *
   * @param {HTMLElement} el
   * @param {TabSettings} settings
   */
  constructor(el, settings) {
    super('tab');

    /** @type {JQuery} */
    this.$el = $(el);

    /** @type {TabSettings} */
    this._settings;

    this.setSettings(settings);
  };

  /**
   * @param {TabSettings} settings
   */
  initialize(settings) {
    this.$el.find('.item').tab(settings || this._settings.toJSON());
  };

  /**
   * @param {TabSettings} settings
   */
  setSettings(settings) {
    if (!(settings instanceof TabSettings)) {
      settings = new TabSettings(settings || {});
    }

    this._settings = settings;

    this.initialize();
  };

  /**
   * @param {string} selector
   * @param {Event} event
   */
  attachEvents(selector, event) { return this._behavior('attach events', selector, event); };

  /**
   * @param {string} path
   */
  changeTab(path) { return this._behavior('change tab', path); };

  /**
   * @param {string} path
   */
  setState(path) { return this._behavior('set state', path); };

  getPath()  { return this._behavior('get path'); };
  isTab() { return this._behavior('is tab'); };

  /**
   * @param {string} path
   */
  cacheRead(path)  { return this._behavior('cache read', path); };

  /**
   * @param {string} path
   * @param {string} html
   */
  cacheAdd(path, html) { return this._behavior('cache add', path, html); };

  /**
   * @param {string} path
   */
  cacheRemove(path)  { return this._behavior('cache remove', path); };
};
