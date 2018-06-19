import { isValid } from './util'
import { SemanticUI, SemanticUISettings } from './semantic-ui'

let validateProps = (
  props = {
    /** @type {boolean} */
    visible,

    /** @type {string} */
    direction,

    /** @type {string} */
    width,

    /** @type {boolean} */
    menu,

    /** @type {boolean} */
    secondary,

    /** @type {boolean} */
    pointing,

    /** @type {boolean} */
    tabular,

    /** @type {boolean} */
    text,

    /** @type {boolean} */
    vertical,

    /** @type {boolean} */
    compact,

    /** @type {boolean} */
    inverted,

    /** @type {boolean | string} */
    icon,

    /** @type {string} */
    size,
  }
) => {
  return {
    visible: ((value) => isValid.boolean(value) ? value : void (0))(props.visible),

    direction: ((value) => isValid.string(value) ? value : void (0))(props.direction),
    width: ((value) => isValid.string(value) ? value : void (0))(props.width),

    menu: ((value) => isValid.boolean(value) ? value : void (0))(props.menu),
    secondary: ((value) => isValid.boolean(value) ? value : void (0))(props.secondary),
    pointing: ((value) => isValid.boolean(value) ? value : void (0))(props.pointing),
    tabular: ((value) => isValid.boolean(value) ? value : void (0))(props.tabular),
    text: ((value) => isValid.boolean(value) ? value : void (0))(props.text),
    vertical: ((value) => isValid.boolean(value) ? value : void (0))(props.vertical),
    compact: ((value) => isValid.boolean(value) ? value : void (0))(props.compact),
    inverted: ((value) => isValid.boolean(value) ? value : void (0))(props.inverted),

    icon: ((value) => {
      if(value === true)  return 'icon';

      if(isValid.string(value)) {
        return `${value} icon`;
      }

      return void (0);
    })(props.icon),

    size: ((value) => isValid.string(value) ? value : void (0))(props.size),
  }
};

export class SidebarSettings extends SemanticUISettings {
  constructor(settings = {
    silent: false,
    debug: false,
    verbose: false,
    performance: true,

    transition: 'auto',
    mobileTransition: 'auto',

    defaultTransition: {
      computer: {
        left: 'uncover',
        right: 'uncover',
        top: 'overlay',
        bottom: 'overlay'
      },
      mobile: {
        left: 'uncover',
        right: 'uncover',
        top: 'overlay',
        bottom: 'overlay'
      }
    },

    context: 'body',
    exclusive: false,
    closable: true,
    dimPage: true,
    scrollLock: false,
    returnScroll: false,
    delaySetup: false,

    duration: 500,

    onChange: function () { },
    onShow: function () { },
    onHide: function () { },

    onHidden: function () { },
    onVisible: function () { },

    className: {
      active: 'active',
      animating: 'animating',
      dimmed: 'dimmed',
      ios: 'ios',
      pushable: 'pushable',
      pushed: 'pushed',
      right: 'right',
      top: 'top',
      left: 'left',
      bottom: 'bottom',
      visible: 'visible'
    },

    selector: {
      fixed: '.fixed',
      omitted: 'script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed',
      pusher: '.pusher',
      sidebar: '.ui.sidebar'
    },

    regExp: {
      ios: /(iPad|iPhone|iPod)/g,
      mobileChrome: /(CriOS)/g,
      mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
    },

    error: {
      method: 'The method you called is not defined.',
      pusher: 'Had to add pusher element. For optimal performance make sure body content is inside a pusher element',
      movedSidebar: 'Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag',
      overlay: 'The overlay setting is no longer supported, use animation: overlay',
      notFound: 'There were no elements that matched the specified selector'
    }
  })  {
    let self;

    super('Sidebar', 'sidebar');

    self = this;

    this.silent = settings.silent || false;
    this.debug = settings.debug || false;
    this.verbose = settings.verbose || false;
    this.performance = settings.performance || true;

    this.transition = settings.transition || 'auto';
    this.mobileTransition = settings.mobileTransition || 'auto';

    this.defaultTransition = settings.defaultTransition;

    this.context = settings.context || 'body';
    this.exclusive = settings.exclusive || false;
    this.closable = settings.closable || true;
    this.dimPage = settings.dimPage || true;
    this.scrollLock = settings.scrollLock || false;
    this.returnScroll = settings.returnScroll || false;
    this.delaySetup = settings.delaySetup || false;

    this.duration = settings.duration || 500;

    this.onChange = function() {
      self.emit(this, settings.onChange);
    };
    this.onShow = function()  {
      self.emit(this, settings.onShow);
    };
    this.onHide = function()  {
      self.emit(this, settings.onHide);
    };

    this.onHidden = function()  {
      self.emit(this, settings.onHidden);
    };
    this.onVisible = function() {
      self.emit(this, settings.onVisible);
    };

    settings.className = isValid.object(settings.className) ? settings.className : {};
    this.className = {
      active: settings.className.active || 'active',
      animating: settings.className.animating || 'animating',
      dimmed: settings.className.dimmed || 'dimmed',
      ios: settings.className.ios || 'ios',
      pushable: settings.className.pushable || 'pushable',
      pushed: settings.className.pushed || 'pushed',
      right: settings.className.right || 'right',
      top: settings.className.top || 'top',
      left: settings.className.left || 'left',
      bottom: settings.className.bottom || 'bottom',
      visible: settings.className.visible || 'visible'
    };

    settings.selector = isValid.object(settings.selector) ? settings.selector : {};
    this.selector = {
      fixed: settings.selector.fixed || '.fixed',
      omitted: settings.selector.omitted || 'script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed',
      pusher: settings.selector.pusher || '.pusher',
      sidebar: settings.selector.sidebar || '.ui.sidebar'
    };

    settings.regExp = isValid.object(settings.regExp) ? settings.regExp : {};
    this.regExp = {
      ios: settings.regExp.ios || /(iPad|iPhone|iPod)/g,
      mobileChrome: settings.regExp.mobileChrome || /(CriOS)/g,
      mobile: settings.regExp.mobile || /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
    };

    settings.error = isValid.object(settings.error) ? settings.error : {};
    this.error = {
      method: settings.error.method || 'The method you called is not defined.',
      pusher: settings.error.pusher || 'Had to add pusher element. For optimal performance make sure body content is inside a pusher element',
      movedSidebar: settings.error.movedSidebar || 'Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag',
      overlay: settings.error.overlay || 'The overlay setting is no longer supported, use animation: overlay',
      notFound: settings.error.notFound || 'There were no elements that matched the specified selector'
    };
  }
}

export class Sidebar extends SemanticUI {
  /**
   * Semantic UI Sidebar
   *
   * @param {HTMLElement} el
   * @param {SidebarSettings} settings
   */
  constructor(el, settings) {
    super('sidebar');

    /**
     * Element Variation
     *
     * @type {JQuery}
     */
    this.$el = $(el);

    /**
     * Settings Variation
     *
     * @type {SidebarSettings}
     */
    this._settings;

    this.setSettings(settings);

    /**
     * Props Variation - visible
     *
     * @type {boolean}
     */
    this.visible;

    /**
     * Props Variation - direction
     *
     * @type {string}
     */
    this.direction;

    /**
     * Props Variation - width
     *
     * @type {string}
     */
    this.width;

    /**
     * Props Variation - menu
     *
     * @type {boolean}
     */
    this.menu;

    /**
     * Props Variation - secondary
     * @type {boolean}
     */
    this.secondary;

    /**
     * Props Variation - pointing
     * @type {boolean}
     */
    this.pointing;

    /**
     * Props Variation - tabular
     * @type {boolean}
     */
    this.tabular;

    /**
     * Props Variation - text
     * @type {boolean}
     */
    this.text;

    /**
     * Props Variation - vertical
     * @type {boolean}
     */
    this.vertical;

    /**
     * Props Variation - compact
     * @type {boolean}
     */
    this.compact;

    /**
     * Props Variation - inverted
     * @type {boolean}
     */
    this.inverted;

    /**
     * Props Variation - icon
     * @type {boolean | string}
     */
    this.icon;

    /**
     * Props Variation - size
     * @type {string}
     */
    this.size;

  };

  setProps(props = {
    /** @type {boolean} */
    visible,

    /** @type {string} */
    direction,

    /** @type {string} */
    width,

    /** @type {boolean} */
    menu,

    /** @type {boolean} */
    secondary,

    /** @type {boolean} */
    pointing,

    /** @type {boolean} */
    tabular,

    /** @type {boolean} */
    text,

    /** @type {boolean} */
    vertical,

    /** @type {boolean} */
    compact,

    /** @type {boolean} */
    inverted,

    /** @type {boolean | string} */
    icon,

    /** @type {string} */
    size,
  }) {
    let validProps = validateProps(props);

    this.visible = validProps.visible;
    this.direction = validProps.direction;
    this.width = validProps.width;

    this.menu = validProps.menu;

    if (this.menu)  {
      this.secondary = validProps.secondary;
      this.pointing = validProps.pointing;
      this.tabular = validProps.tabular;
      this.text = validProps.text;
      this.vertical = validProps.vertical;
      this.compact = validProps.compact;
      this.inverted = validProps.inverted;
      this.icon = validProps.icon;
      this.size = validProps.size;
    }
  };

  /**
   * @param {SidebarSettings} settings
   */
  initialize(settings) {
    this.$el.sidebar(settings || this._settings.toJSON());
  };

  /**
   * @param {SidebarSettings} settings
   */
  setSettings(settings) {
    if (!(settings instanceof SidebarSettings)) {
      settings = new SidebarSettings(settings || {});
    }

    this._settings = settings;

    this.initialize();
  };

  /**
   * @param {string} selector
   * @param {Event} event
   */
  attachEvents(selector, event) { this._behavior('attach events', selector, event); };

  show() { this._behavior('show'); };
  hide()  { this._behavior('hide'); };
  toggle()  { this._behavior('toggle'); };

  isVisible() { return this._behavior('is visible'); };
  isHidden() { return this._behavior('is hidden'); };

  pushPage()  { this._behavior('push page'); };
  pullPage()  { this._behavior('pull page'); };

  getDirection() { return this._behavior('get direction'); };
  getTransitionEvent()  { return this._behavior('get transition event'); };

  addBodyCSS()  { this._behavior('add body CSS'); };
  removeBodyCSS() { this._behavior('remove body CSS'); };
}
