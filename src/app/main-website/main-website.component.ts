import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-website',
  templateUrl: './main-website.component.html',
  styleUrls: ['./main-website.component.scss']
})
export class MainWebsiteComponent implements OnInit {
  showHeader: Boolean = true;

  constructor(public router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event['url'].includes('/welcome/')){
          this.showHeader = false;
        }
        else {
          this.showHeader = true;
        }
      }
    });
   }

  ngOnInit(): void {
  }

}
