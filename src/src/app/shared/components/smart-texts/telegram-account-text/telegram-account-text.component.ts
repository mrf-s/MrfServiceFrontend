import {Component, Input} from '@angular/core';
import {InfoProviderService} from "../../../services/info-provider.service";

@Component({
  selector: 'app-telegram-account-text',
  templateUrl: './telegram-account-text.component.html',
  styleUrls: ['./telegram-account-text.component.scss']
})
export class TelegramAccountTextComponent {
  @Input() isLink: boolean = true;

  constructor(protected info: InfoProviderService) {
  }
}
