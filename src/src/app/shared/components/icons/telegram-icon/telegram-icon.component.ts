import { Component } from '@angular/core';
import {faTelegram} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-telegram-icon',
  templateUrl: './telegram-icon.component.html',
  styleUrls: ['./telegram-icon.component.scss']
})
export class TelegramIconComponent {

  protected readonly faTelegram = faTelegram;
}
