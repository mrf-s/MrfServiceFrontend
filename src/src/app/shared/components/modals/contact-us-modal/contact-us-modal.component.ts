import {Component, EventEmitter, Output} from '@angular/core';
import {InfoProviderService} from "../../../services/info-provider.service";
import {ClosableModal} from "../closableModal";

@Component({
  selector: 'app-contact-us-modal',
  templateUrl: './contact-us-modal.component.html',
  styleUrls: ['./contact-us-modal.component.scss']
})
export class ContactUsModalComponent implements ClosableModal {
  protected info: InfoProviderService
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor(info: InfoProviderService) {
    this.info = info;
  }
}
