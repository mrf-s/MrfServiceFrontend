import { Component } from '@angular/core';
import {ClockIconComponent} from "../../shared/components/icons/clock-icon/clock-icon.component";

@Component({
  selector: 'app-main-page-services',
  templateUrl: './main-page-services.component.html',
  styleUrls: ['./main-page-services.component.scss']
})
export class MainPageServicesComponent {

  protected readonly ClockIconComponent = ClockIconComponent;
}
