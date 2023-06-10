import { Component } from '@angular/core';
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-whats-up-icon',
  templateUrl: './whats-up-icon.component.html',
  styleUrls: ['./whats-up-icon.component.scss']
})
export class WhatsUpIconComponent {

  protected readonly faWhatsapp = faWhatsapp;
}
