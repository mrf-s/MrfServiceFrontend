import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {SharedModule} from "../shared/shared.module";
import { MainPageBillboardComponent } from './main-page-billboard/main-page-billboard.component';
import { MainPageContactsComponent } from './main-page-contacts/main-page-contacts.component';
import { MainPageSectionComponent } from './main-page-section/main-page-section.component';
import { MainPageServicesComponent } from './main-page-services/main-page-services.component';
import {NavbarModule} from "../navbar/navbar.module";



@NgModule({
    declarations: [
        MainPageComponent,
        MainPageBillboardComponent,
        MainPageContactsComponent,
        MainPageSectionComponent,
        MainPageServicesComponent
    ],
    exports: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        SharedModule,
        NavbarModule
    ]
})
export class MainPageModule { }
