import { Component } from '@angular/core';
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-phone-icon',
  templateUrl: './phone-icon.component.html',
  styleUrls: ['./phone-icon.component.scss']
})
export class PhoneIconComponent {
  icon = faPhoneVolume;
}
