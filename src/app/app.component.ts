import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'codex';
  showHeader: Boolean = true;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(public router: Router,
    private location: Location) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event['url'].includes('/welcome/')){
          this.showHeader = false;
        }
        else {
          this.showHeader = true;
          // $('header').removeClass('black-header');
        }
      }
    });

  }

  

  ngOnInit() {

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart) {
        if (ev.url != this.lastPoppedUrl)
          this.yScrollStack.push(window.scrollY);
      } else if (ev instanceof NavigationEnd) {
        if (ev.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else window.scrollTo(0, 0);
      }
    });
    
  }
}
