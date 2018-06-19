<script>
import Vue, { CreateElement } from 'vue'

export default {
  name: 'reveal-hidden-content',

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
        class: 'hidden content'
      },
      children
    );
  }
}
</script>
