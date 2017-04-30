import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CvService } from './../shared/cv.service';
import { Cv } from './../shared/cv';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.less']
})
export class CvComponent implements OnInit {
  error: string;
  cv: Cv;

  constructor(
    private cvService: CvService,
    private router: Router,
    private route: ActivatedRoute,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);

    this.cvService.getCv()
      .then((cv: Cv) => {
        this.cv = cv;
      })
      .catch(error => this.error = error);
  }

  toTop() {
   let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#top');
   this.pageScrollService.start(pageScrollInstance);
  };
}
