import { Injectable } from '@angular/core';
import { CV } from './../shared/mock-cv';
import { Cv } from './../shared/cv';
import { Project } from './../shared/project';

@Injectable()
export class CvService {

  constructor() { }

  getCv(): Promise<Cv> {
    return Promise.resolve(CV);
  }

  getProject(slug: string): Promise<Project> {
    return Promise.resolve(CV.projects.filter((value: Project) => value.slug === slug)[0]);
  }
}
