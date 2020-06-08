import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { StorageService } from 'src/app/services/storage.service';
import { HttpService } from 'src/app/services/http.service';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isBlack:Boolean = false;

  toggleHeader() {

  }

  constructor(public router: Router, public share: ShareService, public storage: StorageService, public http: HttpService) {
    this.toggleHeader();
  }

  ngOnInit(): void {
    this.toggleSearchMobile();
    this.closeMobileMenu();
    this.fixHeader();
  }

  fixHeader(){
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 70) {
          $('.site-navigation,.trans-navigation').addClass('header-white');
      } else {
          $('.site-navigation,.trans-navigation').removeClass('header-white');
      }
  });
  }

  toggleSearchMobile(){
    $('#search-btn').on('click', function () {
      $('.search-mobile').toggleClass('show-search');
    });
  }

  closeMobileMenu(){
    $('.nav-link').on('click', function () {
      if($('.collapse').hasClass('show')){
        $('.collapse').removeClass('show')
      }
      else
      $('.collapse').addClass('show')
    });
  }

  redirectDashboard(){
    if( this.share.role == 'employer')
        this.router.navigate(['/employer'])
      else
      this.router.navigate(['/freelancer'])
  }
  logout() {
    this.storage.destroyUser();
    this.storage.destroyToken();
    this.storage.destroyUserRole();
    this.share.updateUser(null);
    this.share.updateToken(null);
    this.share.updateUserRole(null);
    this.http.postToBackend('/users/logout',{},this.share.token)
    .then(res=> {
      console.log(res);
      this.router.navigate(['/']);
    })
  }

}



