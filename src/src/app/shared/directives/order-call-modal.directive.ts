import {Directive, HostListener} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  OrderCallModalContentComponent
} from "../components/order-call-modal-content/order-call-modal-content.component";

@Directive({
  selector: '[appOrderCallModal]'
})
export class OrderCallModalDirective {
  constructor(private modalService: NgbModal) {
  }

  protected openModal(): void {
    const modalRef = this.modalService.open(OrderCallModalContentComponent, { ariaLabelledBy: 'modal-basic-title', size: "lg" });
    const instance = modalRef.componentInstance as OrderCallModalContentComponent;
    instance.formSubmitted.subscribe(_ => {
      modalRef.close();
    })
  }

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    this.openModal();
  }
}
