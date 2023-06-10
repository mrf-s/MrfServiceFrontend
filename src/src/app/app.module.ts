import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {MainPageModule} from "./main-page/main-page.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NavbarModule} from "./navbar/navbar.module";
import {FooterModule} from "./footer/footer.module";

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
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
