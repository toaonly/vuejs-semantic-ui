export class SemanticUI {
  /**
   * @param {string} name
   */
  constructor(name = '') {
    this.$el = null;
    this.name = (name || '').toLowerCase();
  };

  /**
   * @param {any[]} args
   */
  _behavior(...args) {
    return $.fn[this.name].apply(this.$el, args);
  };
};

export class SemanticUISettings {
  /**
   * @param {string} name
   * @param {string} namespace
   */
  constructor(name = '', namespace = '') {
    this.name = name || '';
    this.namespace = namespace || '';
  };

  /**
   * @param {Object} thisArg
   * @param {string} handler
   * @param {Array} args
   */
  emit(thisArg, handler, args = [])  {
    if (typeof handler === 'function') {
      args.push(thisArg);
      handler.apply(thisArg, args);
    }
  };

  toJSON()  {
    const result = {};

    Object.getOwnPropertyNames(this).forEach(prop => {
      result[prop] = this[prop];
    });

    if (process.env.NODE_ENV === 'development')  {
      console.debug(`[%s][SemanticUISettings] settings > %o`, this.name, result);
    }

    return result;
  };
};


