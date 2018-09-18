import { DimmerSettings } from "../components/dimmer";

declare module 'vue/types/vue' {
  interface Vue {
    $dimmer(selector: string, options: DimmerSettings): Dimmer
  }
}
