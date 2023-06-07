import { Component } from '@angular/core';
import {faShield} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-shield-icon',
  templateUrl: './shield-icon.component.html',
  styleUrls: ['./shield-icon.component.scss']
})
export class ShieldIconComponent {
  icon = faShield;
}
