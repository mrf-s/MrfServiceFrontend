import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { NumberTextLinkComponent } from './components/number-text-link/number-text-link.component';
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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";
import { TimerIconComponent } from './components/icons/timer-icon/timer-icon.component';
import { VolumeIconComponent } from './components/icons/volume-icon/volume-icon.component';
import { OrderCallModalComponent } from './components/modals/order-call-modal/order-call-modal.component';
import { OrderCallModalDirective } from './directives/order-call-modal.directive';
import { XmarkIconComponent } from './components/icons/xmark-icon/xmark-icon.component';
import {AutosizeModule} from "ngx-autosize";
import { NumberInputComponent } from './components/form-inputs/number-input/number-input.component';
import { CaptionLabelTextComponent } from './components/caption-label-text/caption-label-text.component';
import { ContactUsModalComponent } from './components/modals/contact-us-modal/contact-us-modal.component';
import { TelegramAccountTextComponent } from './components/smart-texts/telegram-account-text/telegram-account-text.component';
import { VkPageTextComponent } from './components/smart-texts/vk-page-text/vk-page-text.component';
import { AddressTextComponent } from './components/smart-texts/address-text/address-text.component';
import { ContactUsModalDirective } from './directives/contact-us-modal.directive';
import { ModalBaseComponent } from './components/modals/modal-base/modal-base.component';
import { StringOrTemplateComponent } from './components/string-or-template/string-or-template.component';


@NgModule({
  declarations: [
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
    NumberTextLinkComponent,
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
    TimerIconComponent,
    VolumeIconComponent,
    OrderCallModalComponent,
    OrderCallModalDirective,
    XmarkIconComponent,
    NumberInputComponent,
    CaptionLabelTextComponent,
    ContactUsModalComponent,
    TelegramAccountTextComponent,
    VkPageTextComponent,
    AddressTextComponent,
    ContactUsModalDirective,
    ModalBaseComponent,
    StringOrTemplateComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterLink,
    BrowserAnimationsModule,
    FormsModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    AutosizeModule
  ],
  exports: [
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
    NumberTextLinkComponent,
    ContactCirclesComponent,
    StarsComponent,
    ReviewComponent,
    ChevronUpIconComponent,
    YandexBadgeComponent,
    YandexMapComponent,
    InputComponent,
    TimerIconComponent,
    VolumeIconComponent,
    NavigateTelegramDirective,
    NavigateVkDirective,
    OrderCallModalDirective,
    NavigateWhatsUpDirective,
    CaptionLabelTextComponent,
    TelegramAccountTextComponent,
    VkPageTextComponent,
    AddressTextComponent,
    ContactUsModalDirective
  ]
})
export class SharedModule { }
