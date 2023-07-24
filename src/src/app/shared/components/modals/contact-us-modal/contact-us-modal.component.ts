import { Component } from '@angular/core';
import {InfoProviderService} from "../../../services/info-provider.service";

@Component({
  selector: 'app-contact-us-modal',
  templateUrl: './contact-us-modal.component.html',
  styleUrls: ['./contact-us-modal.component.scss']
})
export class ContactUsModalComponent {
  protected info: InfoProviderService

  constructor(info: InfoProviderService) {
    this.info = info;
  }
}
