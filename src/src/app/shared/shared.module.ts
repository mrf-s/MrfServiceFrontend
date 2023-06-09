import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { ClockIconComponent } from './components/icons/clock-icon/clock-icon.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ShieldIconComponent } from './components/icons/shield-icon/shield-icon.component';
import { IconTextComponent } from './components/icon-text/icon-text.component';
import { WalletIconComponent } from './components/icons/wallet-icon/wallet-icon.component';
import { MarketIconComponent } from './components/icons/market-icon/market-icon.component';
import { PhoneComponent } from './components/icons/phone/phone.component';
import { BurgerComponent } from './components/icons/burger/burger.component';
import {RouterLink} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PrinterIconComponent } from './components/icons/printer-icon/printer-icon.component';
import { AirpodsIconComponent } from './components/icons/airpods-icon/airpods-icon.component';
import { SmartphoneIconComponent } from './components/icons/smartphone-icon/smartphone-icon.component';
import { ComputerIconComponent } from './components/icons/computer-icon/computer-icon.component';
import { WindowsIconComponent } from './components/icons/windows-icon/windows-icon.component';


@NgModule({
  declarations: [
    ButtonComponent,
    BillboardComponent,
    ClockIconComponent,
    ShieldIconComponent,
    IconTextComponent,
    WalletIconComponent,
    MarketIconComponent,
    PhoneComponent,
    BurgerComponent,
    PrinterIconComponent,
    AirpodsIconComponent,
    SmartphoneIconComponent,
    ComputerIconComponent,
    WindowsIconComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterLink,
    BrowserAnimationsModule
  ],
  exports: [
    ButtonComponent,
    BillboardComponent,
    ClockIconComponent,
    ShieldIconComponent,
    IconTextComponent,
    WalletIconComponent,
    PhoneComponent,
    BurgerComponent,
    PrinterIconComponent,
    AirpodsIconComponent,
    SmartphoneIconComponent,
    ComputerIconComponent,
    WindowsIconComponent
  ]
})
export class SharedModule { }
