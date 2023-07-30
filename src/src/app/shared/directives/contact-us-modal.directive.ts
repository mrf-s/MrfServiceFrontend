import {Directive, HostListener} from '@angular/core';
import {ModalReturn, ModalService} from "../services/modal.service";
import {OrderCallModalComponent} from "../components/modals/order-call-modal/order-call-modal.component";
import {ContactUsModalComponent} from "../components/modals/contact-us-modal/contact-us-modal.component";

@Directive({
  selector: '[appContactUsModal]'
})
export class ContactUsModalDirective {
  constructor(private modalService: ModalService) { }

  protected openModal(): void {
    this.modalService.openModal<ContactUsModalComponent>(ContactUsModalComponent);
  }

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    this.openModal();
  }
}
