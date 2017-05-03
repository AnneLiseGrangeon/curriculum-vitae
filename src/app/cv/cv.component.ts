import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CvService } from './../shared/cv.service';
import { Cv } from './../shared/cv';
import { Angulartics2 } from 'angulartics2';
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
  constructor(private cvService: CvService,
    private router: Router,
    private route: ActivatedRoute,
    private angulartics2: Angulartics2,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.cvService.getCv()
    .then((cv: Cv) => {
      this.cv = cv;
    })
    .catch(error => this.error = error);
    this.angulartics2.eventTrack.next({ action: 'Visualize Cv', properties: { category: 'Homepage' }});
  }

  goToCvPresentation() {

   const pageScrollInstance: PageScrollInstance = PageScrollInstance.
   simpleInstance(this.document, '#cv-presentation');
   this.pageScrollService.start(pageScrollInstance);

  }
}
