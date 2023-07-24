import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ClosableModal} from "../components/modals/closableModal";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalService: NgbModal) { }

  public openModal<TComponent>(component: any, options: OpenModalOptions = {size: 'lg'}): ModalReturn<TComponent> {
    const modal: NgbModalRef = this.modalService.open(component, {ariaLabelledBy: 'modal-basic-title', size: options.size});
    const instance: TComponent = modal.componentInstance as TComponent;

    if (this.closableComponentGuard(instance)) {
      instance.close.subscribe(_ => modal.close());
    }

    return new ModalReturn<TComponent>(modal, component);
  }

  public closableComponentGuard(component: any): component is ClosableModal {
    return (<ClosableModal>component).close !== undefined;
  }
}

export class ModalReturn<TComponent> {
  private readonly _modal: NgbModalRef
  private readonly _component: TComponent

  public get component(): TComponent {
    return this._component;
  }
  public get modal(): NgbModalRef {
    return this._modal;
  }

  constructor(modal: NgbModalRef, component: TComponent) {
    this._modal = modal;
    this._component = component;
  }

  public close(): void {
    this._modal.close();
  }
}

export interface OpenModalOptions {
  size: 'sm' | 'lg' | 'xl' | string
}
