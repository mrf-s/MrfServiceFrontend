import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ServiceCenterPageComponent} from "./pages/service-center-page/service-center-page.component";
import {NavbarFooterPageComponent} from "./pages/navbar-footer-page/navbar-footer-page.component";

const routes: Routes = [
  {path: '', component: NavbarFooterPageComponent, children: [
      {path: '', component: ServiceCenterPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
