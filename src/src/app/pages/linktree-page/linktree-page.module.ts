import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinktreePageComponent } from './linktree-page.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    LinktreePageComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class LinktreePageModule { }
