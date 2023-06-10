import { Component } from '@angular/core';
import {InfoProviderService} from "../shared/services/info-provider.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public info: InfoProviderService) {
  }
}
