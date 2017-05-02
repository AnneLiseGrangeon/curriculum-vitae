import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CvService } from './../shared/cv.service';
import { Cv } from './../shared/cv';
import { Angulartics2 } from 'angulartics2';


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
    private angulartics2: Angulartics2
    
  ) { }

  ngOnInit() {
    this.cvService.getCv()
    .then((cv: Cv) => {
      this.cv = cv;
    })
    .catch(error => this.error = error);
    this.angulartics2.eventTrack.next({ action: 'Visualize Cv', properties: { category: 'Homepage' }});
  }
}
