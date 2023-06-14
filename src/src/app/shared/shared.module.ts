import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { BillboardComponent } from './components/billboard/billboard.component';
import { ClockIconComponent } from './components/icons/clock-icon/clock-icon.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ShieldIconComponent } from './components/icons/shield-icon/shield-icon.component';
import { WalletIconComponent } from './components/icons/wallet-icon/wallet-icon.component';
import { MarketIconComponent } from './components/icons/market-icon/market-icon.component';
import { PhoneIconComponent } from './components/icons/phone-icon/phone-icon.component';
import { BurgerComponent } from './components/icons/burger/burger.component';
import {RouterLink} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PrinterIconComponent } from './components/icons/printer-icon/printer-icon.component';
import { AirpodsIconComponent } from './components/icons/airpods-icon/airpods-icon.component';
import { SmartphoneIconComponent } from './components/icons/smartphone-icon/smartphone-icon.component';
import { ComputerIconComponent } from './components/icons/computer-icon/computer-icon.component';
import { WindowsIconComponent } from './components/icons/windows-icon/windows-icon.component';
import { PremiumIconComponent } from './components/icons/premium-icon/premium-icon.component';
import { LogoComponent } from './components/logo/logo.component';
import { NumberComponent } from './components/number/number.component';
import { NumberNavigateDirective } from './directives/number-navigate.directive';
import { TelegramIconComponent } from './components/icons/telegram-icon/telegram-icon.component';
import { VkIconComponent } from './components/icons/vk-icon/vk-icon.component';
import { WhatsUpIconComponent } from './components/icons/whats-up-icon/whats-up-icon.component';
import { NavigateTelegramDirective } from './directives/navigate-telegram.directive';
import { NavigateVkDirective } from './directives/navigate-vk.directive';
import { NavigateWhatsUpDirective } from './directives/navigate-whats-up.directive';
import { ContactCirclesComponent } from './components/contact-circles/contact-circles.component';
import { SolidStarIconComponent } from './components/icons/solid-star-icon/solid-star-icon.component';
import { HollowStarIconComponent } from './components/icons/hollow-star-icon/hollow-star-icon.component';
import { StarsComponent } from './components/stars/stars.component';
import { SemiStarIconComponent } from './components/icons/semi-star-icon/semi-star-icon.component';
import { ReviewComponent } from './components/review/review.component';
import { ChevronUpIconComponent } from './components/icons/chevron-up-icon/chevron-up-icon.component';
import { YandexIconComponent } from './components/icons/yandex-icon/yandex-icon.component';
import { TwogisIconComponent } from './components/icons/twogis-icon/twogis-icon.component';
import { ParallaxDirective } from './directives/parallax.directive';
import { YandexBadgeComponent } from './components/yandex-badge/yandex-badge.component';
import { NavigateYandexMapDirective } from './directives/navigate-yandex-map.directive';
import { Navigate2gisMapDirective } from './directives/navigate-2gis-map.directive';
import { NavigateGoogleMapDirective } from './directives/navigate-google-map.directive';
import { GoogleIconComponent } from './components/icons/google-icon/google-icon.component';
import { YandexMapComponent } from './components/yandex-map/yandex-map.component';
import { InputComponent } from './components/form-inputs/input/input.component';
import { ContactUsFormComponent } from './components/contact-us-form/contact-us-form.component';
import {FormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";
import { NumberInputComponent } from './components/form-inputs/number-input/number-input.component';
import { TimerIconComponent } from './components/icons/timer-icon/timer-icon.component';


@NgModule({
  declarations: [
    ButtonComponent,
    BillboardComponent,
    ClockIconComponent,
    ShieldIconComponent,
    WalletIconComponent,
    MarketIconComponent,
    PhoneIconComponent,
    BurgerComponent,
    PrinterIconComponent,
    AirpodsIconComponent,
    SmartphoneIconComponent,
    ComputerIconComponent,
    WindowsIconComponent,
    PremiumIconComponent,
    LogoComponent,
    NumberComponent,
    NumberNavigateDirective,
    TelegramIconComponent,
    VkIconComponent,
    WhatsUpIconComponent,
    NavigateTelegramDirective,
    NavigateVkDirective,
    NavigateWhatsUpDirective,
    ContactCirclesComponent,
    SolidStarIconComponent,
    HollowStarIconComponent,
    StarsComponent,
    SemiStarIconComponent,
    ReviewComponent,
    ChevronUpIconComponent,
    YandexIconComponent,
    TwogisIconComponent,
    ParallaxDirective,
    YandexBadgeComponent,
    NavigateYandexMapDirective,
    Navigate2gisMapDirective,
    NavigateGoogleMapDirective,
    GoogleIconComponent,
    YandexMapComponent,
    InputComponent,
    ContactUsFormComponent,
    NumberInputComponent,
    TimerIconComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterLink,
    BrowserAnimationsModule,
    FormsModule,
    NgxMaskDirective
  ],
  exports: [
    ButtonComponent,
    BillboardComponent,
    ClockIconComponent,
    ShieldIconComponent,
    WalletIconComponent,
    PhoneIconComponent,
    BurgerComponent,
    PrinterIconComponent,
    AirpodsIconComponent,
    SmartphoneIconComponent,
    ComputerIconComponent,
    WindowsIconComponent,
    PremiumIconComponent,
    LogoComponent,
    NumberNavigateDirective,
    NumberComponent,
    ContactCirclesComponent,
    StarsComponent,
    ReviewComponent,
    ChevronUpIconComponent,
    YandexBadgeComponent,
    YandexMapComponent,
    InputComponent,
    NumberInputComponent,
    TimerIconComponent
  ]
})
export class SharedModule { }
