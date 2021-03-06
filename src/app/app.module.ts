import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { CvService } from './shared/cv.service';
import { CvModule } from './cv/cv.module';
import { ProjectModule } from './project/project.module';
import { AppRoutingModule } from './app-routing.module';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import { MetaModule } from '@nglibs/meta';

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
    AppRoutingModule,
    Ng2PageScrollModule.forRoot(),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    MetaModule.forRoot()
  ],
  providers: [CvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
