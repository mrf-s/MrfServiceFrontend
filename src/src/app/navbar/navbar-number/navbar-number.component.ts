import { Component } from '@angular/core';
import {InfoProviderService} from "../../shared/services/info-provider.service";

@Component({
  selector: 'app-navbar-number',
  templateUrl: './navbar-number.component.html',
  styleUrls: ['./navbar-number.component.scss']
})
export class NavbarNumberComponent {
  constructor(public info: InfoProviderService) {
  }
}
