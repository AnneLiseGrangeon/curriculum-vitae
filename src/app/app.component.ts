import { Component, OnInit, Inject } from '@angular/core';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { Angulartics2GoogleAnalytics } from 'angulartics2';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(
  	angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
  	private pageScrollService: PageScrollService,
  	@Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit() {
    window.scrollTo(0,0);
  }

  toTop() {
   let pageScrollInstance: PageScrollInstance = PageScrollInstance.
   simpleInstance(this.document, '#top');
   this.pageScrollService.start(pageScrollInstance);
  };

}

