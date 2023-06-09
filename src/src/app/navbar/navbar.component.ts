import { Component } from '@angular/core';
import {InfoProviderService} from "../shared/services/info-provider.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public info: InfoProviderService) {
  }

  isBurgerTouched: boolean = false;

  toggleBurger(): void {
    this.isBurgerTouched = !this.isBurgerTouched;
  }
}
