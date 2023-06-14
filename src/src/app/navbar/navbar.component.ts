import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {InfoProviderService} from "../shared/services/info-provider.service";
import {animate, sequence, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('dropDown', [
      transition(':enter', [
        style({height: 0, overflow: 'hidden'}),
        sequence([
          animate("200ms ease-in-out", style({ height: "*" }))
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
  @ViewChild('navbar') navbar!: ElementRef;

  constructor(public info: InfoProviderService, private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if(!this.navbar.nativeElement.contains(e.target)){
        this.isBurgerTouched = false;
      }
    })
  }

  isBurgerTouched: boolean = false;

  toggleBurger(): void {
    this.isBurgerTouched = !this.isBurgerTouched;
  }

  closeBurger(): void {
    this.isBurgerTouched = false;
  }
}
