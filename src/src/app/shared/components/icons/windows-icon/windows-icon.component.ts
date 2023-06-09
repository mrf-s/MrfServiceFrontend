import { Component } from '@angular/core';
import {faWindows} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-windows-icon',
  templateUrl: './windows-icon.component.html',
  styleUrls: ['./windows-icon.component.scss']
})
export class WindowsIconComponent {

  protected readonly faWindows = faWindows;
}
