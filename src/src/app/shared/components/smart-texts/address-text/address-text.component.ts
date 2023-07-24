import {Component, Input} from '@angular/core';
import {InfoProviderService} from "../../../services/info-provider.service";

@Component({
  selector: 'app-address-text',
  templateUrl: './address-text.component.html',
  styleUrls: ['./address-text.component.scss']
})
export class AddressTextComponent {
  @Input() isWithRequest: boolean = true;

  constructor(protected info: InfoProviderService) {
  }
}
