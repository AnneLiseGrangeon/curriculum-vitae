import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';

import { CvRoutingModule } from './cv-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CvRoutingModule
  ],
  declarations: [
    CvComponent
  ],
  exports: [
    CvComponent
  ]
})
export class CvModule { }
