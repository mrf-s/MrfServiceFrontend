import { Component } from '@angular/core';
import {faWallet} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-wallet-icon',
  templateUrl: './wallet-icon.component.html',
  styleUrls: ['./wallet-icon.component.scss']
})
export class WalletIconComponent {
  icon = faWallet;
}
