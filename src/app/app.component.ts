import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#beginning');
    this.pageScrollService.start(pageScrollInstance);
  }
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
    PageScrollConfig.defaultScrollOffset = 300;
    PageScrollConfig.defaultDuration = 7000;
  }

  public goToEnd(): void {
    const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#end');
    this.pageScrollService.start(pageScrollInstance);
    setTimeout(this.reachedTarget, 8000);
  }


  public reachedTarget() {
      console.log('Yeah, we reached our destination');
  }
}
