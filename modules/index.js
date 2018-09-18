import { VueConstructor } from 'vue';
import { Dimmer, DimmerSettings } from '../components/dimmer';

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

          dimmer.initialize($(selector), options);

          return dimmer;
        }
      }
    }
  })
}
