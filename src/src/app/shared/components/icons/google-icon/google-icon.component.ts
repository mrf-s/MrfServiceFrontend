import { Component } from '@angular/core';
import {faGoogle} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-google-icon',
  templateUrl: './google-icon.component.html',
  styleUrls: ['./google-icon.component.scss']
})
export class GoogleIconComponent {

  protected readonly faGoogle = faGoogle;
}
