import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MaterializeModule
  ],
  declarations: [
    ProjectComponent
  ]
})
export class ProjectModule { }
