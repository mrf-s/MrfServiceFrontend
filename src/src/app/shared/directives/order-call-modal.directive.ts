import {Directive, HostListener} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  OrderCallModalComponent
} from "../components/modals/order-call-modal/order-call-modal.component";
import {ModalReturn, ModalService} from "../services/modal.service";

@Directive({
  selector: '[appOrderCallModal]'
})
export class OrderCallModalDirective {
  constructor(private modalService: ModalService) {
  }

  protected openModal(): void {
    const modal: ModalReturn<OrderCallModalComponent> = this.modalService.openModal<OrderCallModalComponent>(OrderCallModalComponent);
    modal.component.onFormSubmit.subscribe(_ => {
      modal.close();
    });
  }

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    this.openModal();
  }
}
