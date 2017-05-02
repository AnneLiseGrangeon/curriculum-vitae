import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AppComponent } from './app.component';
import { MetaGuard } from '@nglibs/meta';

const routes: Routes = [
  { path: '', component: CvComponent, canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Anne-Lise G. | Book',
        description: 'Curriculum Vitae Anne-Lise Grangeon',
        author: 'Anne-Lise Grangeon',
        publisher: 'Anne-Lise Grangeon'
      }
    }
  },
  { path: '**', component: AppComponent, canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Anne-Lise G. | Book',
        description: 'Curriculum Vitae Anne-Lise Grangeon',
        author: 'Anne-Lise Grangeon',
        publisher: 'Anne-Lise Grangeon'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
