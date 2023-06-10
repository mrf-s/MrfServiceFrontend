import {Component, Input} from '@angular/core';
import {InfoProviderService} from "../../services/info-provider.service";

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {
  constructor(public info: InfoProviderService) {
  }
}
