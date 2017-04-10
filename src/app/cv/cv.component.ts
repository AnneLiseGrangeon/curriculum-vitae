import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CvService } from './../shared/cv.service';
import { Cv } from './../shared/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.less']
})
export class CvComponent implements OnInit {
  private error: string;
  private cv: Cv;

  constructor(
    private cvService: CvService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cvService.getCv()
      .then((cv: Cv) => {
        this.cv = cv;
      })
      .catch(error => this.error = error);
  }
}
