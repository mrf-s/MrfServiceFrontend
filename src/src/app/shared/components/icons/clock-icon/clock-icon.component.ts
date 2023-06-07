import { Component } from '@angular/core';
import {faClock} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-clock-icon',
  templateUrl: './clock-icon.component.html',
  styleUrls: ['./clock-icon.component.scss']
})
export class ClockIconComponent {
  icon = faClock;
}
