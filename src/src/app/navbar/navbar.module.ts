import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar.component";
import {SharedModule} from "../shared/shared.module";
import {RouterLink} from "@angular/router";
import { NavbarNavigationsComponent } from './navbar-navigations/navbar-navigations.component';
import { NavbarResponsiveNavigationComponent } from './navbar-responsive-navigation/navbar-responsive-navigation.component';
import { NavbarNumberComponent } from './navbar-number/navbar-number.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarNavigationsComponent,
    NavbarResponsiveNavigationComponent,
    NavbarNumberComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ]
})
export class NavbarModule { }
