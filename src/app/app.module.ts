import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { CvService } from './shared/cv.service';
import { CvModule } from './cv/cv.module'
import { ProjectModule } from './project/project.module'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterializeModule,
    ProjectModule,
    CvModule,
    AppRoutingModule
  ],
  providers: [CvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
