import Vue, { VueConstructor, PluginFunction } from "vue";
import { DimmerSettings, Dimmer } from "./dimmer";
import { ModalSettings, Modal } from "./modal";

export default function install(): PluginFunction<never>

declare module "vue/types/vue" {
  interface Vue {
    $dimmer(selector: string, options: DimmerSettings): Dimmer,

    $modal(vm: VueConstructor, options?: ModalSettings): Modal,

    $modal(selector?: string, options?: ModalSettings): Modal,

    $modal(options?: ModalSettings): Modal
  }
}
