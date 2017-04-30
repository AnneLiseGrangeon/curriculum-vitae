import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv.component';
import { MetaGuard } from '@nglibs/meta';

const routes: Routes = [
  { path: 'cv', component: CvComponent, canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Page CV',
        description: 'Cv Anne-Lise Grangeon',
        author: 'Anne-Lise Grangeon',
        publisher: 'Anne-Lise Grangeon'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
