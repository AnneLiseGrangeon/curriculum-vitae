import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AppComponent } from './app.component';
import { MetaGuard } from '@nglibs/meta';

const routes: Routes = [
  { path: '', component: CvComponent, canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Cv Homepage',
        description: 'Cv Homepage Anne-Lise Grangeon',
        author: 'Anne-Lise Grangeon',
        publisher: 'Anne-Lise Grangeon'
      }
    }
  },
  { path: '**', component: AppComponent, canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Cv Homepage',
        description: 'Cv Homepage Anne-Lise Grangeon',
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
