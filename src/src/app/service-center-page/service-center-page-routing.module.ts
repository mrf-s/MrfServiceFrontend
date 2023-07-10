import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceCenterPageComponent} from "./service-center-page.component";

const routes: Routes = [
  {path: '', component: ServiceCenterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ServiceCenterPageRoutingModule { }
