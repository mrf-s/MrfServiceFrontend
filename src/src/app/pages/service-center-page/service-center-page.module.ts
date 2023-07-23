import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ServiceCenterPageComponent } from './service-center-page.component';
import {SharedModule} from "../../shared/shared.module";
import { ServiceCenterPageBillboardComponent } from './service-center-page-billboard/service-center-page-billboard.component';
import { ServiceCenterPageContactsComponent } from './service-center-page-contacts/service-center-page-contacts.component';
import { ServiceCenterPageSectionComponent } from './service-center-page-section/service-center-page-section.component';
import { ServiceCenterServicesComponent } from './service-center-page-services/service-center-services.component';
import {NavbarModule} from "../../navbar/navbar.module";
import { ServiceCenterServicesItemComponent } from './service-center-page-services/services-center-services-item/service-center-services-item.component';
import { ServiceCenterPageReviewsComponent } from './service-center-page-reviews/service-center-page-reviews.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { ServiceCenterPageAboutUsComponent } from './service-center-page-about-us/service-center-page-about-us.component';
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        ServiceCenterPageComponent,
        ServiceCenterPageBillboardComponent,
        ServiceCenterPageContactsComponent,
        ServiceCenterPageSectionComponent,
        ServiceCenterServicesComponent,
        ServiceCenterServicesItemComponent,
        ServiceCenterPageReviewsComponent,
        ServiceCenterPageAboutUsComponent
    ],
    exports: [
        ServiceCenterPageComponent
    ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        SharedModule,
        NavbarModule,
      NgbModalModule,
      CarouselModule,
      RouterModule
    ]
})
export class ServiceCenterPageModule { }

