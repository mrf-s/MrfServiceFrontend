import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {MainPageModule} from "./main-page/main-page.module";
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

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MainPageModule,
    FontAwesomeModule,
    NavbarModule,
    FooterModule,
    RouterModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
      { provide: LOCALE_ID, useValue: 'ru' },
    {provide: 'ReviewsProvider', useClass: StubReviewsProviderService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
