import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'codex';
  showHeader: Boolean = true;

  constructor(public router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if ( event['url'] == '/login' ){
          this.showHeader = false;
        }
        else {
          this.showHeader = true;
          // $('header').removeClass('black-header');
        }
      }
    });
  }
}
