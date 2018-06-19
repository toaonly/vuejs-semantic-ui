<template>
<div class="ui">
  <slot></slot>
</div>
</template>


<script>
import { Sidebar, SidebarSettings } from './sidebar'

export default {
  name: 'su-sidebar',

  data()  {
    return {
      /** @type {Sidebar} */
      _sidebar: null
    }
  },

  model: {
    prop: 'value'
  },

  props: {
    value: Boolean,

    visible: Boolean,

    direction: String,
    width: String,

    settings: {
      type: Object,
      default: () => new SidebarSettings,
      required: false
    },

    /** This Props is equal Menu Props **/
    menu: Boolean,

    /** use only menu property is true **/
    secondary: Boolean,
    pointing: Boolean,
    tabular: Boolean,
    text: Boolean,
    vertical: Boolean,
    compact: Boolean,
    inverted: Boolean,
    icon: [ Boolean, String ],
    size: String,
  },

  watch: {
    value() {
      if(this.value)  this._sidebar.show();
      else this._sidebar.hide();
    }
  },

  methods: {
    /**
     * @param {string} behavior
     * @param {any[]} args
     */
    sidebar(behavior, ...args) {
      let sidebar = this._sidebar;

      let _behavior = behavior.split(' ').map((s, i) => {
        if(i > 0)	{
          let sf = s[0].toUpperCase();
          return sf + s.substr(1);
        }

        return s;
      }).join('');

      /** @type {function} */
      let behaviorMethod = sidebar[`${_behavior}`];

      if(typeof behaviorMethod === 'function') {
        behaviorMethod.apply(sidebar, args);
      }
    },

    hasPusher() {
      return document.querySelector('.pusher') ? true : false;
    },

    createPusher()  {
      let body = document.body,
        pusher = document.createElement('div'),
        firstChildOfBody = body.firstElementChild;

      pusher.className = 'pusher';

      pusher.appendChild(firstChildOfBody);

      body.appendChild(pusher);
    },

    isParentBody()  {
      return this.$parent === this.$root;
    },

    insertBody()  {
      let body = document.body;

      body.insertBefore(this.$el, body.firstElementChild);
    }
  },

  mounted() {
    let el = this.$el;

    /** If you use sidebar, must have '.puhser' element */
    if(!this.hasPusher()) {
      this.createPusher();
    }

    /** Sidebar has only parent element is body tag */
    if(!this.isParentBody()) {
      this.insertBody();
    }

    /** @type {SidebarSettings} */
    let settings = this.settings;

    settings.onChange = (context) => { this.$emit('change', { context }); };
    settings.onShow = (context) => {
      this.$emit('input', true);
      this.$emit('change');
      this.$emit('show', { context });
    };
    settings.onHide = (context) => {
      this.$emit('input', false);
      this.$emit('change');
      this.$emit('hide', { context });
    };
    settings.onHidden = (context) => { this.$emit('hidden', { context }); };
    settings.onVisible = (context) => { this.$emit('visible', { context }); };

    let sidebar = new Sidebar(el, settings);

    sidebar.setProps({
      visible: this.visible,
      direction: this.direction,
      width: this.width,

      menu: this.menu,
      secondary: this.secondary,
      pointing: this.pointing,
      tabular: this.tabular,
      text: this.text,
      vertical: this.vertical,
      compact: this.compact,
      inverted: this.inverted,
      icon: this.icon,
      size: this.size
    });

    if(sidebar.visible) el.classList.add('visible');
    if(sidebar.direction) el.classList.add(sidebar.direction);
    if(sidebar.width) el.classList.add(sidebar.width);

    if(sidebar.menu)  {
      if(sidebar.secondary) el.classList.add('secondary');
      if(sidebar.pointing) el.classList.add('pointing');
      if(sidebar.tabular) el.classList.add('tabular');
      if(sidebar.text) el.classList.add('text');
      if(sidebar.vertical) el.classList.add('vertical');
      if(sidebar.pointing) el.classList.add('pointing');
      if(sidebar.compact) el.classList.add('compact');
      if(sidebar.inverted) el.classList.add('inverted');
      if(sidebar.icon) el.classList.add(sidebar.icon);
      if(sidebar.size) el.classList.add(sidebar.size);

      el.classList.add('menu');
    }

    el.classList.add('sidebar');

    this._sidebar = sidebar;
  },

  destroyed() {
    this.$el.remove();
  }
}
</script>

<style scoped>
html.ios {
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
html.ios,
html.ios body {
  height: initial !important;
}
</style>

