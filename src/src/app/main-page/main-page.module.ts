import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {SharedModule} from "../shared/shared.module";
import { MainPageBillboardComponent } from './main-page-billboard/main-page-billboard.component';
import { MainPageContactsComponent } from './main-page-contacts/main-page-contacts.component';



@NgModule({
    declarations: [
        MainPageComponent,
        MainPageBillboardComponent,
        MainPageContactsComponent
    ],
    exports: [
        MainPageComponent
    ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    SharedModule
  ]
})
export class MainPageModule { }
