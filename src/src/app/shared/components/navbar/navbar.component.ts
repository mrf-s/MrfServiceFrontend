import { Component } from '@angular/core';
import {animate, sequence, style, transition, trigger} from "@angular/animations";
import {InfoProviderService} from "../../services/info-provider.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('dropDown', [
      transition(':enter', [
        style({height: 0, overflow: 'hidden'}),
        sequence([
          animate("150ms ease-in-out", style({ height: "*" }))
        ])
      ]),
      transition(':leave', [
        style({height: '*', overflow: 'hidden'}),
        sequence([
          animate("200ms ease-in-out", style({ height: 0 }))
        ])
      ])
    ])
  ]
})
export class NavbarComponent {
  constructor(public info: InfoProviderService) {
  }

  isBurgerTouched: boolean = false;

  toggleBurger(): void {
    this.isBurgerTouched = !this.isBurgerTouched;
  }
}
