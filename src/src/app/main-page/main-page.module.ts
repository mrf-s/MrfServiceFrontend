import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
    declarations: [
        MainPageComponent
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
