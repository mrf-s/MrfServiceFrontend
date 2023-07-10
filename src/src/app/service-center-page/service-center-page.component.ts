import { Component } from '@angular/core';
import {InfoProviderService} from "../shared/services/info-provider.service";

@Component({
  selector: 'app-service-center-page',
  templateUrl: './service-center-page.component.html',
  styleUrls: ['./service-center-page.component.scss']
})
export class ServiceCenterPageComponent {
  constructor(public info: InfoProviderService) {
  }
}
