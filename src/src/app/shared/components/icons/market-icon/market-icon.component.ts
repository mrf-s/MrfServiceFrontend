import { Component } from '@angular/core';
import {faShop} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-market-icon',
  templateUrl: './market-icon.component.html',
  styleUrls: ['./market-icon.component.scss']
})
export class MarketIconComponent {
  icon = faShop;
}
