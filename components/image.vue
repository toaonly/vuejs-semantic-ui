<script>
import { CreateElement, RenderContext } from 'vue'
import Image, { Svg, SvgImage } from './image'

export default {
  name: 'su-image',

  props: {
    src: String,
    svg: Object,
    link: String,
    hidden: Boolean,
    reveal: Boolean,
    disabled: Boolean,
    avatar: Boolean,
    bordered: Boolean,
    fluid: Boolean,
    rounded: Boolean,
    circular: Boolean,
    aligned: String,
    centered: Boolean,
    spaced: [ Boolean, String ],
    floated: String,
    slide: String,
    size: String,
  },

  /**
   * @param {CreateElement} createElement
   * @param {RenderContext<Props>} hack
   */
  render(createElement, hack) {
    let element = 'img',
      className = 'ui',
      image = new Image(this.$props),
      children = [];

    if(image.svg) {
      element = 'div';

      let svgImage = createElement('image', {
        attrs: {
          'xlink:href': image.src,
          x: image.svg.image.x,
          y: image.svg.image.y,
          width: image.svg.image.width,
          height: image.svg.image.height
        }
      });

      let svg = createElement(
        'svg',
        {
          attrs: {
            width: image.svg.width,
            height: image.svg.height,
          }
        },
        [ svgImage ]
      );

      children.push(svg);
    }

    if(image.slide) {
      element = 'div';
      children.push(this.$slots.default);
    }

    if(image.link)  {
      element = 'a';
      children.push(createElement('img', { attrs: { src: image.src } }));
    }

    if(image.size)  className += ` ${image.size}`;
    if(image.hidden)  className += ` hidden`;
    if(image.reveal)  className += ` reveal`;
    if(image.disabled)  className += ` disabled`;
    if(image.avatar)  className += ` avatar`;
    if(image.bordered)  className += ` bordered`;
    if(image.fluid)  className += ` fluid`;
    if(image.rounded)  className += ` rounded`;
    if(image.circular)  className += ` circular`;
    if(image.aligned)  className += ` ${image.aligned} aligned`;
    if(image.centered)  className += ` centered`;
    if(image.spaced)  className += ` ${image.spaced}`;
    if(image.floated)  className += ` ${image.floated} floated`;
    if(image.slide)  className += ` ${image.slide} slide`;

    className += ` image`;

    let imageTemplate = createElement(
      element,
      {
        class: className,
        attrs: {
          src: image.svg ? null : image.link ? null : image.src,
          href: image.link ? image.link : null
        }
      },
      children
    );

    return imageTemplate;
  },
}
</script>
