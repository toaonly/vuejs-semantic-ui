export declare interface ModalSettings {
  detachable: boolean,
  autofocus: boolean,
  observeChanges: boolean,
  allowMultiple: boolean,
  keyboardShortcuts: boolean,
  offset: number,
  context: string,
  closable: boolean,
  dimmerSettings: any,
  transition: string,
  duration: number,
  queue: boolean,
  inverted: boolean,

  onShow(): any,
  onVisible(): any,
  onHide(): any,
  onHidden(): any,
  onApprove(): any,
  onDeny(): any
}

export declare class Modal {
  settings: ModalSettings
}
