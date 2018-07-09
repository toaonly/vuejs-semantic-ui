import { isValid } from './util'
import { SemanticUI, SemanticUISettings } from './semantic-ui'

/**
 * @typedef ModalProp
 * @property {boolean} selection
 * @property {boolean} search
 * @property {boolean} multiple
 * @property {boolean} inline
 * @property {boolean} pointing
 * @property {boolean} floating
 * @property {boolean} simple
 * @property {boolean} labeled
 * @property {boolean} loading
 * @property {boolean} error
 * @property {boolean} active
 * @property {boolean} disabled
 * @property {boolean} scrolling
 * @property {boolean} compact
 * @property {boolean} fluid
 * @property {string} icon
 *
 * @param {ModalProp} props
 */
let validateProps = (props) => {
  return {
    selection: (value => isValid.boolean(value) ? value : void 0)(props.selection),
    search: (value => isValid.boolean(value) ? value : void 0)(props.search),
    multiple: (value => isValid.boolean(value) ? value : void 0)(props.multiple),
    inline: (value => isValid.boolean(value) ? value : void 0)(props.inline),
    pointing: (value => isValid.boolean(value) ? value : void 0)(props.pointing),
    floating: (value => isValid.boolean(value) ? value : void 0)(props.floating),
    simple: (value => isValid.boolean(value) ? value : void 0)(props.simple),
    labeled: (value => isValid.boolean(value) ? value : void 0)(props.labeled),
    loading: (value => isValid.boolean(value) ? value : void 0)(props.loading),
    error: (value => isValid.boolean(value) ? value : void 0)(props.error),
    active: (value => isValid.boolean(value) ? value : void 0)(props.active),
    disabled: (value => isValid.boolean(value) ? value : void 0)(props.disabled),
    scrolling: (value => isValid.boolean(value) ? value : void 0)(props.scrolling),
    compact: (value => isValid.boolean(value) ? value : void 0)(props.compact),
    fluid: (value => isValid.boolean(value) ? value : void 0)(props.fluid),

    icon: (value => isValid.string(value) ? value : void 0)(props.icon),
  }
}

export class DropdownSettings extends SemanticUISettings {
  constructor(settings = {
    silent: false,
    debug: false,
    verbose: false,
    performance: true,

    on: 'click',    // what event should show menu action on item selection
    action: 'activate', // action on item selection (nothing, activate, select, combo, hide, function(){})

    values: false,      // specify values to use for dropdown

    apiSettings: false,
    selectOnKeydown: true,       // Whether selection should occur automatically when keyboard shortcuts used
    minCharacters: 0,          // Minimum characters required to trigger API call

    filterRemoteData: false,      // Whether API results should be filtered after being returned for query term
    saveRemoteData: true,       // Whether remote name/value pairs should be stored in sessionStorage to allow remote data to be restored on page refresh

    throttle: 200,        // How long to wait after last user input to search remotely

    context: window,     // Context to use when determining if on screen
    direction: 'auto',     // Whether dropdown should always open in one direction
    keepOnScreen: true,       // Whether dropdown should check whether it is on screen before showing

    match: 'both',     // what to match against with search selection (both, text, or label)
    fullTextSearch: false,      // search anywhere in value (set to 'exact' to require exact matches)

    placeholder: 'auto',     // whether to convert blank <select> values to placeholder text
    preserveHTML: true,       // preserve html when selecting value
    sortSelect: false,      // sort selection on init

    forceSelection: true,       // force a choice on blur with search selection

    allowAdditions: false,      // whether multiple select should allow user added values
    ignoreCase: false,       // whether to consider values not matching in case to be the same
    hideAdditions: true,       // whether or not to hide special message prompting a user they can enter a value

    maxSelections: false,      // When set to a number limits the number of selections to this count
    useLabels: true,       // whether multiple select should filter currently active selections from choices
    delimiter: ',',        // when multiselect uses normal <input> the values will be delimited with this character

    showOnFocus: true,       // show menu on focus
    allowReselection: false,      // whether current value should trigger callbacks when reselected
    allowTab: true,       // add tabindex to element
    allowCategorySelection: false,      // allow elements with sub-menus to be selected

    fireOnInit: false,      // Whether callbacks should fire when initializing dropdown values

    transition: 'auto',     // auto transition will slide down or up based on direction
    duration: 200,        // duration of transition

    glyphWidth: 1.037,      // widest glyph width in em (W is 1.037 em) used to calculate multiselect input width

    // label settings on multi-select
    label: {
      transition: 'scale',
      duration: 200,
      variation: false
    },

    // delay before event
    delay: {
      hide: 300,
      show: 200,
      search: 20,
      touch: 50
    },

    /* Callbacks */
    onChange: function (value, text, $selected) {
      self.emit(this, settings.onChange, args);
    },
    onAdd: function (value, text, $selected) {
      self.emit(this, settings.onAdd, args);
    },
    onRemove: function (value, text, $selected) {
      self.emit(this, settings.onRemove, args);
    },

    onLabelSelect: function ($selectedLabels) {
      self.emit(this, settings.onLabelSelect, args);
    },
    onLabelCreate: function (value, text) {
      self.emit(this, settings.onLabelCreate, args);
    },
    onLabelRemove: function (value) {
      self.emit(this, settings.onLabelRemove, args);
      return true;
    },
    onNoResults: function (searchTerm) {
      self.emit(this, settings.onNoResults, args);
      return true;
    },
    onShow: function () {
      self.emit(this, settings.onShow, args);
    },
    onHide: function () {
      self.emit(this, settings.onHide, args);
    },

    message: {
      addResult: 'Add <b>{term}</b>',
      count: '{count} selected',
      maxSelections: 'Max {maxCount} selections',
      noResults: 'No results found.',
      serverError: 'There was an error contacting the server'
    },

    error: {
      action: 'You called a dropdown action that was not defined',
      alreadySetup: 'Once a select has been initialized behaviors must be called on the created ui dropdown',
      labels: 'Allowing user additions currently requires the use of labels.',
      missingMultiple: '<select> requires multiple property to be set to correctly preserve multiple values',
      method: 'The method you called is not defined.',
      noAPI: 'The API module is required to load resources remotely',
      noStorage: 'Saving remote data requires session storage',
      noTransition: 'This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>'
    },

    regExp: {
      escape: /[-[\]{}()*+?.,\\^$|#\s]/g,
      quote: /"/g
    },

    metadata: {
      defaultText: 'defaultText',
      defaultValue: 'defaultValue',
      placeholderText: 'placeholder',
      text: 'text',
      value: 'value'
    },

    // property names for remote query
    fields: {
      remoteValues: 'results',  // grouping for api results
      values: 'values',   // grouping for all dropdown values
      disabled: 'disabled', // whether value should be disabled
      name: 'name',     // displayed dropdown text
      value: 'value',    // actual dropdown value
      text: 'text'      // displayed text when selected
    },

    keys: {
      backspace: 8,
      delimiter: 188, // comma
      deleteKey: 46,
      enter: 13,
      escape: 27,
      pageUp: 33,
      pageDown: 34,
      leftArrow: 37,
      upArrow: 38,
      rightArrow: 39,
      downArrow: 40
    },

    selector: {
      addition: '.addition',
      dropdown: '.ui.dropdown',
      hidden: '.hidden',
      icon: '> .dropdown.icon',
      input: '> input[type="hidden"], > select',
      item: '.item',
      label: '> .label',
      remove: '> .label > .delete.icon',
      siblingLabel: '.label',
      menu: '.menu',
      message: '.message',
      menuIcon: '.dropdown.icon',
      search: 'input.search, .menu > .search > input, .menu input.search',
      sizer: '> input.sizer',
      text: '> .text:not(.icon)',
      unselectable: '.disabled, .filtered'
    },

    className: {
      active: 'active',
      addition: 'addition',
      animating: 'animating',
      disabled: 'disabled',
      empty: 'empty',
      dropdown: 'ui dropdown',
      filtered: 'filtered',
      hidden: 'hidden transition',
      item: 'item',
      label: 'ui label',
      loading: 'loading',
      menu: 'menu',
      message: 'message',
      multiple: 'multiple',
      placeholder: 'default',
      sizer: 'sizer',
      search: 'search',
      selected: 'selected',
      selection: 'selection',
      upward: 'upward',
      leftward: 'left',
      visible: 'visible'
    }
  }) {
    let self;

    super('Dropdown', 'dropdown');

    self = this;

    this.on = settings.on || 'click';
    this.action = settings.action || 'activate';

    this.values = settings.values || false;

    this.apiSettings = settings.apiSettings === false ?  false : (settings.apiSettings || false),
    this.selectOnKeydown = settings.selectOnKeydown || true;
    this.minCharacters = settings.minCharacters || 0;

    this.filterRemoteData = settings.filterRemoteData || false;
    this.saveRemoteData = settings.saveRemoteData || true;

    this.throttle = settings.throttle === 0 ? 0 : settings.throttle || 200;

    this.context = settings.context || window;
    this.direction = settings.direction || 'auto';
    this.keepOnScreen = settings.keepOnScreen || true;

    this.match = settings.match || 'both';
    this.fullTextSearch = settings.fullTextSearch || false;

    this.placeholder = settings.placeholder || 'auto';
    this.preserveHTML = settings.preserveHTML || true;
    this.sortSelect = settings.sortSelect || false;

    this.forceSelection = settings.forceSelection || true;

    this.allowAdditions = settings.allowAdditions || false;
    this.ignoreCase = settings.ignoreCase || false;
    this.hideAdditions = settings.hideAdditions || true;

    this.maxSelections = settings.maxSelections || false;
    this.useLabels = settings.useLabels || true;
    this.delimiter = settings.delimiter || ',';

    this.showOnFocus = settings.showOnFocus || true;
    this.allowReselection = settings.allowReselection || false;
    this.allowTab = settings.allowTab || true;
    this.allowCategorySelection = settings.allowCategorySelection || false;

    this.fireOnInit = settings.fireOnInit || false;

    this.transition = settings.transition || 'auto';
    this.duration = settings.duration === 0 ? 0 : settings.duration || 200;

    this.glyphWidth = settings.glyphWidth === 0 ? 0 : settings.glyphWidth || 1.037;

    settings.label = settings.label || {};

    this.label = {
      transition: settings.label.transition || 'scale',
      duration: settings.label.duration === 0 ? 0 : settings.label.duration || 200,
      variation: settings.label.variation === false ? false : settings.label.variation || false
    };

    settings.delay = settings.delay || {};

    this.delay = {
      hide: settings.delay.hide === 0 ? 0 : settings.delay.hide || 300,
      show: settings.delay.show === 0 ? 0 : settings.delay.show || 200,
      search: settings.delay.search === 0 ? 0 : settings.delay.search || 20,
      touch: settings.delay.touch === 0 ? 0 : settings.delay.touch || 50
    };

    /**
     * @param {any} value
     * @param {string} text
     * @param {JQuery} $selected
     */
    this.onChange = function(value, text, $selected) {
      self.emit(this, settings.onChange, [value, text, $selected]);
    };

    /**
     * @param {any} value
     * @param {string} text
     * @param {JQuery} $selected
     */
    this.onAdd = function(value, text, $selected) {
      self.emit(this, settings.onAdd, [value, text, $selected]);
    };

    /**
     * @param {any} value
     * @param {string} text
     * @param {JQuery} $selected
     */
    this.onRemove = function(value, text, $selected) {
      self.emit(this, settings.onRemove, [value, text, $selected]);
    };

    /**
     * @param {JQuery} $selectedLabels
     */
    this.onLabelSelect = function($selectedLabels) {
      self.emit(this, settings.onLabelSelect, [$selectedLabels]);
    };

    /**
     * @param {any} value
     * @param {string} text
     */
    this.onLabelCreate = function(value, text) {
      self.emit(this, settings.onLabelCreate, [value, text]);
      return $(this);
    };

    /**
     * @param {any} value
     */
    this.onLabelRemove = function(value) {
      self.emit(this, settings.onLabelRemove, [value]);
      return true;
    };

    /**
     * @param {string} searchTerm
     */
    this.onNoResults = function(searchTerm) {
      self.emit(this, settings.onNoResults, [searchTerm]);
      return true;
    };

    this.onShow = function() {
      self.emit(this, settings.onShow);
    };

    this.onHide = function() {
      self.emit(this, settings.onHide);
    };

    settings.message = settings.message || {};

    this.message = {
      addResult: settings.message || 'Add <b>{term}</b>',
      count: settings.message || '{count} selected',
      maxSelections: settings.message || 'Max {maxCount} selections',
      noResults: settings.message || 'No results found.',
      serverError: settings.message || 'There was an error contacting the server'
    };

    settings.error = settings.error || {};

    this.error = {
      action: settings.error || 'You called a dropdown action that was not defined',
      alreadySetup: settings.error || 'Once a select has been initialized behaviors must be called on the created ui dropdown',
      labels: settings.error || 'Allowing user additions currently requires the use of labels.',
      missingMultiple: settings.error || '<select> requires multiple property to be set to correctly preserve multiple values',
      method: settings.error || 'The method you called is not defined.',
      noAPI: settings.error || 'The API module is required to load resources remotely',
      noStorage: settings.error || 'Saving remote data requires session storage',
      noTransition: settings.error || 'This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>'
    };

    settings.regExp = settings.regExp || {};

    this.regExp = {
      escape: settings.regExp || /[-[\]{}()*+?.,\\^$|#\s]/g,
      quote: settings.regExp || /"/g
    };

    settings.metadata = settings.metadata || {};

    this.metadata = {
      defaultText: settings.metadata || 'defaultText',
      defaultValue: settings.metadata || 'defaultValue',
      placeholderText: settings.metadata || 'placeholder',
      text: settings.metadata || 'text',
      value: settings.metadata || 'value'
    };

    settings.fields = settings.fields || {};

    this.fields = {
      remoteValues: settings.fields || 'results',
      values: settings.fields || 'values',
      disabled: settings.fields || 'disabled',
      name: settings.fields || 'name',
      value: settings.fields || 'value',
      text: settings.fields || 'text'
    };

    settings.keys = settings.keys || {};

    this.keys = {
      backspace: settings.keys || 8,
      delimiter: settings.keys || 188,
      deleteKey: settings.keys || 46,
      enter: settings.keys || 13,
      escape: settings.keys || 27,
      pageUp: settings.keys || 33,
      pageDown: settings.keys || 34,
      leftArrow: settings.keys || 37,
      upArrow: settings.keys || 38,
      rightArrow: settings.keys || 39,
      downArrow: settings.keys || 40
    };

    settings.selector = settings.selector || {};

    this.selector = {
      addition: settings.selector || '.addition',
      dropdown: settings.selector || '.ui.dropdown',
      hidden: settings.selector || '.hidden',
      icon: settings.selector || '> .dropdown.icon',
      input: settings.selector || '> input[type="hidden"], > select',
      item: settings.selector || '.item',
      label: settings.selector || '> .label',
      remove: settings.selector || '> .label > .delete.icon',
      siblingLabel: settings.selector || '.label',
      menu: settings.selector || '.menu',
      message: settings.selector || '.message',
      menuIcon: settings.selector || '.dropdown.icon',
      search: settings.selector || 'input.search, .menu > .search > input, .menu input.search',
      sizer: settings.selector || '> input.sizer',
      text: settings.selector || '> .text:not(.icon)',
      unselectable: settings.selector || '.disabled, .filtered'
    };

    settings.className = settings.className || {};

    this.className = {
      active: settings.className || 'active',
      addition: settings.className || 'addition',
      animating: settings.className || 'animating',
      disabled: settings.className || 'disabled',
      empty: settings.className || 'empty',
      dropdown: settings.className || 'ui dropdown',
      filtered: settings.className || 'filtered',
      hidden: settings.className || 'hidden transition',
      item: settings.className || 'item',
      label: settings.className || 'ui label',
      loading: settings.className || 'loading',
      menu: settings.className || 'menu',
      message: settings.className || 'message',
      multiple: settings.className || 'multiple',
      placeholder: settings.className || 'default',
      sizer: settings.className || 'sizer',
      search: settings.className || 'search',
      selected: settings.className || 'selected',
      selection: settings.className || 'selection',
      upward: settings.className || 'upward',
      leftward: settings.className || 'left',
      visible: settings.className || 'visible'
    };

    this.silent = settings.silent || false;
    this.debug = settings.debug || false;
    this.verbose = settings.verbose || false;
    this.performance = settings.performance || true;
  }
};

export class Dropdown extends SemanticUI {
  /**
   * Semantic UI Dropdown
   *
   * @param {HTMLElement} el
   * @param {DropdownSettings} settings
   */
  constructor(el, settings) {
    super('dropdown');

    /** @type {JQuery} */
    this.$el = $(el);

    /** @type {DropdownSettings} */
    this._settings;

    this.setSettings(settings);

    /** @type {boolean} */
    this.selection;

    /** @type {boolean} */
    this.search;

    /** @type {boolean} */
    this.multiple;

    /** @type {boolean} */
    this.inline;

    /** @type {boolean} */
    this.pointing;

    /** @type {boolean} */
    this.floating;

    /** @type {boolean} */
    this.simple;

    /** @type {boolean} */
    this.labeled;

    /** @type {boolean} */
    this.loading;

    /** @type {boolean} */
    this.error;

    /** @type {boolean} */
    this.active;

    /** @type {boolean} */
    this.disabled;

    /** @type {boolean} */
    this.scrolling;

    /** @type {boolean} */
    this.compact;

    /** @type {boolean} */
    this.fluid;

    /** @type {string} */
    this.icon;
  };

  /**
   * @param {DropdownSettings} settings
   */
  initialize(settings) {
    this.$el.dropdown(settings || this._settings.toJSON());
  };

  /**
   * @param {DropdownSettings} settings
   */
  setSettings(settings) {
    if (!(settings instanceof DropdownSettings)) {
      settings = new DropdownSettings(settings || {});
    }

    this._settings = settings;

    this.initialize();
  };

  /**
   * @param {ModalProp} props
   */
  setProps(props)  {
    let validProps = validateProps(props);

    this.selection = validProps.selection;
    this.search = validProps.search;
    this.multiple = validProps.multiple;
    this.inline = validProps.inline;
    this.pointing = validProps.pointing;
    this.floating = validProps.floating;
    this.simple = validProps.simple;
    this.labeled = validProps.labeled;
    this.loading = validProps.loading;
    this.error = validProps.error;
    this.active = validProps.active;
    this.disabled = validProps.disabled;
    this.scrolling = validProps.scrolling;
    this.compact = validProps.compact;
    this.fluid = validProps.fluid;
    this.icon = validProps.icon;
  };

  setupMenu(values) { this._behavior('setup menu', values) };
  changeValues(values) { this._behavior('change values', values) };
  refresh() { this._behavior('refresh') };
  toggle() { this._behavior('toggle') };
  show() { this._behavior('show') };
  hide() { this._behavior('hide') };
  clear() { this._behavior('clear') };
  hideOthers () { this._behavior('hide others') };
  restoreDefaults () { this._behavior('restore defaults') };
  restoreDefaultText () { this._behavior('restore default text') };
  restorePlaceholderText () { this._behavior('restore placeholder text') };
  restoreDefaultValue () { this._behavior('restore default value') };
  saveDefaults () { this._behavior('save defaults') };
  setSelected(value) { this._behavior('set selected', value) };
  removeSelected(value) { this._behavior('remove selected', value) };
  setSelected(value1, value2) { this._behavior('set selected', [value1, value2]) };
  setExactly(value1, value2) { this._behavior('set exactly', [value1, value2]) };
  setText(text) { this._behavior('set text', text) };
  setValue(value) { this._behavior('set value', value) };
  getText() { return this._behavior('get text') };
  getValue() { return this._behavior('get value') };
  getItem(value) { return this._behavior('get item', value) };
  bindTouchEvents() { this._behavior('bind touch events') };
  bindMouseEvents() { this._behavior('bind mouse events') };
  bindIntent() { this._behavior('bind intent') };
  unbindIntent() { this._behavior('unbind intent') };
  determineIntent() { return this._behavior('determine intent') };
  determineSelectAction(text, value) { this._behavior('determine select action', text, value) };
  setActive() { this._behavior('set active') };
  setVisible() { this._behavior('set visible') };
  removeActive() { this._behavior('remove active') };
  removeVisible() { this._behavior('remove visible') };
  isSelection() { return this._behavior('is selection') };
  isAnimated() { return this._behavior('is animated') };
  isVisible() { return this._behavior('is visible') };
  isHidden() { return this._behavior('is hidden') };
  getDefaultText() { return this._behavior('get default text') };
  getPlaceholderText() { return this._behavior('get placeholder text') };
}
