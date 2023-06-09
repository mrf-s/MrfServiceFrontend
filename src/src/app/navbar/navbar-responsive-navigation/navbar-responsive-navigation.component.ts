import {Component, Input} from '@angular/core';
import {animate, sequence, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-navbar-responsive-navigation[show]',
  templateUrl: './navbar-responsive-navigation.component.html',
  styleUrls: ['./navbar-responsive-navigation.component.scss'],
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
export class NavbarResponsiveNavigationComponent {
  @Input() show: boolean = false;
}
