import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {ServiceCenterPageModule} from "./service-center-page/service-center-page.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NavbarModule} from "./navbar/navbar.module";
import {FooterModule} from "./footer/footer.module";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import {ReviewsProvider} from "./shared/services/reviews-provider";
import {StubReviewsProviderService} from "./shared/services/stub-reviews-provider.service";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NavbarFooterPageModule} from "./navbar-footer-page/navbar-footer-page.module";

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ServiceCenterPageModule,
    FontAwesomeModule,
    NavbarModule,
    FooterModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    NgxMaskDirective,
    NgxMaskPipe,
    HttpClientModule,
    NavbarFooterPageModule
  ],
  providers: [
      { provide: LOCALE_ID, useValue: 'ru' },
    {provide: 'ReviewsProvider', useClass: StubReviewsProviderService},
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
