import { Component } from '@angular/core';
import {faStopwatch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-timer-icon',
  templateUrl: './timer-icon.component.html',
  styleUrls: ['./timer-icon.component.scss']
})
export class TimerIconComponent {

  protected readonly faStopwatch = faStopwatch;
}
