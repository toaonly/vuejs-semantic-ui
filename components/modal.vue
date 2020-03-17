<script>
import { CreateElement, VNodeChildren } from 'vue'
import { Modal, ModalSettings, ModalModule } from './modal'
import SuIcon from '../components/icon.vue'

export default {
  name: 'semantic-ui-modal',

  // model: {
  //   prop: 'value'
  // },

  props: {
    // value: {
    //   type: Boolean,
    //   required: true,
    //   default: false
    // },

    close: Boolean,

    basic: Boolean,
    fullscreen: Boolean,
    size: String,
    active: Boolean,

    settings: {
      type: Object,
      default: () => ({}),
      required: false
    }
  },

  data()  {
    return {
      /** @type {Modal} */
      _modal: null
    }
  },

  // watch: {
  //   value() {
  //     this.value === true ? this.show() : void(0)
  //   }
  // },

  methods: {
    show()    { this._modal.show() },
    hide()    { this._modal.hide() },
    toggle()  { this._modal.toggle() },
    refresh()  { this._modal.refresh() },
    showDimmer()  { this._modal.showDimmer() },
    hideDimmer()  { this._modal.hideDimmer() },
    hideOthers()  { this._modal.hideOthers() },
    hideAll()  { this._modal.hideAll() },
    cacheSizes()  { this._modal.cacheSizes() },
    canFit()  { this._modal.canFit() },
    remove()  { this._modal.remove() }
  },

  /**
   * @param {CreateElement} h
   */
  render(h) {
    const modal = new Modal({
      basic: this.basic,
      fullscreen: this.fullscreen,
      size: this.size,
      active: this.active
    })

    /** @type {VNodeChildren} */
    const children = []

    if(this.close) {
      children.push(h(SuIcon, { props: { name: 'close' } }))
    }

    children.push(this.$slots.default)

    return h(
      'div',
      {
        class: Modal.generateClassName(modal)
      },
      children
    )
  },

  mounted() {
    /** @type {ModalSettings} */
    const settings = this.settings

    settings.onShow = (context) => {
      this.$emit('show', { context })
    }

    settings.onVisible = (context) => {
      this.$emit('visible', { context })
    }

    settings.onHide = (context, $element) => {
      this.$emit('hide', { context, $element })
    }

    settings.onHidden = (context) => {
      this.$emit('hidden', { context })
    }

    settings.onApprove = event => {
      this.$emit('approve', event)
    }

    settings.onDeny = event => {
      this.$emit('deny', event)
    }

    this._modal = new ModalModule(this.$el, settings)

    if(this.value) this.show()
  }
}
</script>

<style scoped>
.ui.modal > .icon.close {
  top: 1rem;
  right: 1rem;
  color: #000;
}
</style>
