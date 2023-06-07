import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { ClockIconComponent } from './components/icons/clock-icon/clock-icon.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ShieldIconComponent } from './components/icons/shield-icon/shield-icon.component';
import { IconTextComponent } from './components/icon-text/icon-text.component';
import { WalletIconComponent } from './components/icons/wallet-icon/wallet-icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarketIconComponent } from './components/icons/market-icon/market-icon.component';



@NgModule({
  declarations: [
    ButtonComponent,
    BillboardComponent,
    ClockIconComponent,
    ShieldIconComponent,
    IconTextComponent,
    WalletIconComponent,
    NavbarComponent,
    MarketIconComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ButtonComponent,
    BillboardComponent,
    ClockIconComponent,
    ShieldIconComponent,
    IconTextComponent,
    WalletIconComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
