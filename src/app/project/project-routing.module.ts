import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { MetaGuard } from '@nglibs/meta';

const routes: Routes = [
  { path: 'projet/:slug', component: ProjectComponent, canActivate: [MetaGuard],
    data: {
      meta: {
        title: 'Projet',
        description: 'Page projet',
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
export class ProjectRoutingModule { }
