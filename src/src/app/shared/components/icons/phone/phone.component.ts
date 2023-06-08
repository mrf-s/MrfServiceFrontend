import { Component } from '@angular/core';
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent {
  icon = faPhoneVolume;
}
