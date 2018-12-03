import { VueConstructor } from 'vue';
import { Dimmer, DimmerSettings } from '../components/dimmer';
import { Modal, ModalSettings } from '../components/modal';

/**
 *
 * @param {VueConstructor} Vue
 */
export default function modules(Vue) {
  Object.defineProperties(Vue.prototype, {
    $dimmer: {
      get() {
        /**
         * @param {string} selector
         * @param {DimmerSettings} options
         */
        return function $dimmer(selector, options) {
          const dimmer = new Dimmer;

          dimmer.initialize(selector, options);

          return dimmer;
        }
      }
    },

    $modal: {
      get() {
        /**
         * @param {VueConstructor} vm
         * @param {string} selector
         * @param {ModalSettings} options
         */
        return function $modal(...args) {
          /** @type {VueConstructor} */
          let vm;

          /** @type {string} */
          let selector;

          /** @type {ModalSettings} */
          let options;

          if(args.length > 1) {
            selector = args[0];
            options = args[1];
          } else {
            switch (typeof args[0]) {
              case 'string':
                selector = args[0];
                break;
              // case 'object':
              //   vm = args[0];
              //   selector = vm.$el.classList;
              default:
                selector = 'body';
                options = args[0];
                break;
            }
          }

          // return new Modal(selector, options);
        }
      }
    }
  })
}
