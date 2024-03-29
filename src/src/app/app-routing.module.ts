import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServiceCenterPageComponent} from "./pages/service-center-page/service-center-page.component";
import {NavbarFooterPageComponent} from "./pages/navbar-footer-page/navbar-footer-page.component";
import {LinktreePageComponent} from "./pages/linktree-page/linktree-page.component";

const routes: Routes = [
  {path: '', component: NavbarFooterPageComponent, children: [
      {path: '', component: ServiceCenterPageComponent},
    ]},
  {path: 'card', component: LinktreePageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
