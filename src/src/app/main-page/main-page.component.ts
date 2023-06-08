import { Component } from '@angular/core';
import {InfoProviderService} from "../shared/services/info-provider.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(public info: InfoProviderService) {
  }
}
