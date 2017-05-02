import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  buttonAppears: boolean;

  @HostListener('window:scroll', [])
  onScroll() {
    const number = this.document.body.scrollTop;
    if (number > 1000) {
      this.buttonAppears = true;
    } else if (this.buttonAppears && number < 1000) {
      this.buttonAppears = false;
    }
  }

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.buttonAppears = false;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  toTop() {
    const pageScrollInstance: PageScrollInstance = PageScrollInstance.
    simpleInstance(this.document, '#top');
    this.pageScrollService.start(pageScrollInstance);
  };

}

