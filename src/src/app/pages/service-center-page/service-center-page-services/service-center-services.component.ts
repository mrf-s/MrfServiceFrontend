import { Component } from '@angular/core';
import {ClockIconComponent} from "../../../shared/components/icons/clock-icon/clock-icon.component";

@Component({
  selector: 'app-service-center-page-services',
  templateUrl: './service-center-services.component.html',
  styleUrls: ['./service-center-services.component.scss']
})
export class ServiceCenterServicesComponent {

  protected readonly ClockIconComponent = ClockIconComponent;
}
