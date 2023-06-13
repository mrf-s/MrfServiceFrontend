import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {SharedModule} from "../shared/shared.module";
import { MainPageBillboardComponent } from './main-page-billboard/main-page-billboard.component';
import { MainPageContactsComponent } from './main-page-contacts/main-page-contacts.component';
import { MainPageSectionComponent } from './main-page-section/main-page-section.component';
import { MainPageServicesComponent } from './main-page-services/main-page-services.component';
import {NavbarModule} from "../navbar/navbar.module";
import { MainPageServicesItemComponent } from './main-page-services/main-page-services-item/main-page-services-item.component';
import { MainPageReviewsComponent } from './main-page-reviews/main-page-reviews.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { MainPageAboutUsComponent } from './main-page-about-us/main-page-about-us.component';
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
    declarations: [
        MainPageComponent,
        MainPageBillboardComponent,
        MainPageContactsComponent,
        MainPageSectionComponent,
        MainPageServicesComponent,
        MainPageServicesItemComponent,
        MainPageReviewsComponent,
        MainPageAboutUsComponent
    ],
    exports: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        SharedModule,
        NavbarModule,
      NgbModalModule,
      CarouselModule
    ]
})
export class MainPageModule { }
