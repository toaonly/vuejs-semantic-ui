import { isValid } from './util'
import { SemanticUI, SemanticUISettings } from './semantic-ui'
import Menu from './menu'

let validateProps = (props = {
  /** @type {boolean} */
  styled,
  /** @type {boolean} */
  fluid,
  /** @type {boolean} */
  inverted,
  /** @type {boolean} */
  field,
  /** @type {Menu} */
  menu
}) => {
  return {
    /** @return {boolean} */
    styled: (value => (isValid.boolean(value) ? value : void(0)))(props.styled),

    /** @return {boolean} */
    fluid: (value => (isValid.boolean(value) ? value : void(0)))(props.fluid),

    /** @return {boolean} */
    inverted: (value => (isValid.boolean(value) ? value : void(0)))(props.inverted),

    /** @return {boolean} */
    field: (value => (isValid.boolean(value) ? value : void(0)))(props.field),

    /** @return {Menu} */
    menu: (value => (isValid.object(value) ? new Menu(value) : void(0)))(props.menu)
  }
}

export class AccordionSettings extends SemanticUISettings {
  constructor(settings = {
    exclusive: true,
    on: 'click',
    animateChildren: true,
    closeNested: false,
    collapsible: true,
    duration: 350,
    easing: 'easeOutQuad',

    onOpening: function () { },
    onOpen: function () { },
    onClosing: function () { },
    onClose: function () { },
    onChange: function () { },
    onChanging: function () { },

    selector: {
      accordion: '.accordion',
      title: '.title',
      trigger: '.title',
      content: '.content'
    },
    className: {
      active: 'active',
      animating: 'animating'
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

    super('Accordion', 'accordion');

    self = this;

    this.exclusive = settings.exclusive || true;
    this.on = settings.on || 'click';
    this.animateChildren = settings.animateChildren || true;
    this.closeNested = settings.closeNested || false;
    this.collapsible = settings.collapsible || true;
    this.duration = settings.duration || 350;
    this.easing = settings.easing || 'easeOutQuad';

    this.onOpening = function (...args) {
      self.emit(this, settings.onOpening, args);
    };
    this.onOpen = function (...args) {
      self.emit(this, settings.onOpen, args);
    };
    this.onClosing = function (...args) {
      self.emit(this, settings.onClosing, args);
    };
    this.onClose = function (...args) {
      self.emit(this, settings.onClose, args);
    };
    this.onChange = function (...args) {
      self.emit(this, settings.onChange, args);
    };
    this.onChanging = function (...args) {
      self.emit(this, settings.onChanging, args);
    };

    settings.selector = settings.selector || {};
    settings.className = settings.className || {};

    this.selector = {
      accordion: settings.selector.accordion || '.accordion',
      title: settings.selector.title || '.title',
      trigger: settings.selector.trigger || '.title',
      content: settings.selector.content || '.content'
    };

    this.className = {
      active: settings.className.active || 'active',
      animating: settings.className.animating || 'animating'
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

export class Accordion extends SemanticUI {
  /**
   * Semantic UI Accordion
   *
   * @param {HTMLElement} el
   * @param {AccordionSettings} settings
   */
  constructor(el, settings) {
    super('accordion');

    /**
     * Element Variation
     *
     * @type {JQuery}
     */
    this.$el = $(el);

    /**
     * Settings Variation
     *
     * @type {AccordionSettings}
     */
    this._settings;

    this.setSettings(settings);

    /**
     * Props Variation - Styled
     *
     * @type {boolean}
     */
    this.styled;

    /**
     * Props Variation - Fluid
     *
     * @type {boolean}
     */
    this.fluid;

    /**
     * Props Variation - Inverted
     *
     * @type {boolean}
     */
    this.inverted;

    /**
     * Props Variation - Field
     *
     * @type {boolean}
     */
    this.field;

    /**
     * Props Variation - Menu
     *
     * @type {Menu}
     */
    this.menu;
  };

  setProps(props = {
    styled,
    fluid,
    inverted,
    field,
    menu
  })  {
    let validProps = validateProps(props);

    this.styled = validProps.styled;
    this.fluid = validProps.fluid;
    this.inverted = validProps.inverted;
    this.field = validProps.field;
    this.menu = validProps.menu;
  };

  /**
   * @param {AccordionSettings} settings
   */
  initialize(settings)  {
    this.$el.accordion(settings || this._settings.toJSON());
  };

  /**
   * @param {AccordionSettings} settings
   */
  setSettings(settings) {
    if (!(settings instanceof AccordionSettings)) {
      settings = new AccordionSettings(settings || {});
    }

    this._settings = settings;

    this.initialize();
  };

  refresh() { this._behavior('refresh'); };

  /** @param {number} index */
  open(index) { this._behavior('open', index); };

  closeOthers() { this._behavior('close others'); };

  /** @param {number} index */
  close(index)  { this._behavior('close', index); };

  /** @param {number} index */
  toggle(index) { this._behavior('toggle', index); };
};
