import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CvService } from './../shared/cv.service';
import { Cv } from './../shared/cv';
import { Project } from './../shared/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {

  private error: string;
  private project: Project;

  constructor(
    private cvService: CvService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);

    this.route.params.forEach((params: Params) => {
      if (typeof params['slug'] === 'string') {
        const slug = params['slug'];
        this.cvService.getProject(slug)
        .then((project: Project) => {
          this.project = project;
        })
        .catch(error => this.error = error);
      }
    });
  }
}
