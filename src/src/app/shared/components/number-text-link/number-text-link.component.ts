import {Component, Input} from '@angular/core';
import {InfoProviderService} from "../../services/info-provider.service";

@Component({
  selector: 'app-number-text-link',
  templateUrl: './number-text-link.component.html',
  styleUrls: ['./number-text-link.component.scss']
})
export class NumberTextLinkComponent {
  constructor(public info: InfoProviderService) {
  }
}
