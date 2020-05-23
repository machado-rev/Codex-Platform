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
 
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(public router: Router,
              private location: Location) {}


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

    $("body").on("click", "[data-action]", function(e) {

      e.preventDefault();

      var $this = $(this);
      var action = $this.data('action');
      var target = $this.data('target');


      // Manage actions

      switch (action) {
          case 'sidenav-pin':
              this.pinSidenav();
          break;

          case 'sidenav-unpin':
              this.unpinSidenav();
          break;

          case 'search-show':
              target = $this.data('target');
              $('body').removeClass('g-navbar-search-show').addClass('g-navbar-search-showing');

              setTimeout(function() {
                  $('body').removeClass('g-navbar-search-showing').addClass('g-navbar-search-show');
              }, 150);

              setTimeout(function() {
                  $('body').addClass('g-navbar-search-shown');
              }, 300)
          break;

          case 'search-close':
              target = $this.data('target');
              $('body').removeClass('g-navbar-search-shown');

              setTimeout(function() {
                  $('body').removeClass('g-navbar-search-show').addClass('g-navbar-search-hiding');
              }, 150);

              setTimeout(function() {
                  $('body').removeClass('g-navbar-search-hiding').addClass('g-navbar-search-hidden');
              }, 300);

              setTimeout(function() {
                  $('body').removeClass('g-navbar-search-hidden');
              }, 500);
          break;
      }
  })



    
  }

  
  pinSidenav() {
    $('.sidenav-toggler').addClass('active');
    $('.sidenav-toggler').data('action', 'sidenav-unpin');
    $('body').removeClass('g-sidenav-hidden').addClass('g-sidenav-show g-sidenav-pinned');
    $('body').append('<div class="backdrop d-xl-none" data-action="sidenav-unpin" data-target='+$('#sidenav-main').data('target')+' />');

    // Store the sidenav state in a cookie session
    //Cookies.set('sidenav-state', 'pinned');
}

 unpinSidenav() {
    $('.sidenav-toggler').removeClass('active');
    $('.sidenav-toggler').data('action', 'sidenav-pin');
    $('body').removeClass('g-sidenav-pinned').addClass('g-sidenav-hidden');
    $('body').find('.backdrop').remove();

    // Store the sidenav state in a cookie session
    //Cookies.set('sidenav-state', 'unpinned');
}
}
