import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CvService } from './../shared/cv.service';
import { Cv } from './../shared/cv';
import { Project } from './../shared/project';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {
  error: string;
  project: Project;

  constructor(private cvService: CvService,
    private router: Router,
    private route: ActivatedRoute,
    private angulartics2: Angulartics2) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.forEach((params: Params) => {
      if (typeof params['slug'] === 'string') {
        const slug = params['slug'];
        this.cvService.getProject(slug)
        .then((project: Project) => {
          this.project = project;
          this.angulartics2.eventTrack.next(
            { action: 'Visualize Project', properties: { category: project.title }});
        })
        .catch(error => this.error = error);
      }
    });

  }
}
