import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarFooterPageComponent } from './navbar-footer-page.component';
import {FooterModule} from "../../footer/footer.module";
import {NavbarModule} from "../../navbar/navbar.module";
import {ServiceCenterPageModule} from "../service-center-page/service-center-page.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NavbarFooterPageComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    NavbarModule,
    ServiceCenterPageModule,
    RouterModule
  ]
})
export class NavbarFooterPageModule { }
