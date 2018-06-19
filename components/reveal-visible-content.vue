<script>
import Vue, { CreateElement } from 'vue'

export default {
  name: 'reveal-visible-content',

  /**
   * @param {CreateElement} createElement
   */
  render(createElement) {
    let hasImageToParent = this.$parent && this.$parent.image,
      element = 'div',
      children = [ this.$slots.default ];

    if(hasImageToParent === true) element = 'img';

    return createElement(
      element,
      {
        class: 'visible content'
      },
      children
    );
  }
}
</script>
