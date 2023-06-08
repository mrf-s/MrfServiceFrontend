import { Component } from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent {
  icon = faBars;
}
