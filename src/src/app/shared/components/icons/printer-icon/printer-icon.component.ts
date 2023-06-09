import { Component } from '@angular/core';
import {faPrint} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-printer-icon',
  templateUrl: './printer-icon.component.html',
  styleUrls: ['./printer-icon.component.scss']
})
export class PrinterIconComponent {
  icon = faPrint;
}
