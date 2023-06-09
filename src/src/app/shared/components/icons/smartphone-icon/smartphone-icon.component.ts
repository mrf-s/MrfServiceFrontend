import { Component } from '@angular/core';
import {faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-smartphone-icon',
  templateUrl: './smartphone-icon.component.html',
  styleUrls: ['./smartphone-icon.component.scss']
})
export class SmartphoneIconComponent {
  icon = faMobileScreenButton;
}
