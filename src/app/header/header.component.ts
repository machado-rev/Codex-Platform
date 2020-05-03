import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 70) {
          $('.site-navigation,.trans-navigation').addClass('header-white');
      } else {
          $('.site-navigation,.trans-navigation').removeClass('header-white');
      }
  });

  $('#search-btn').on('click', function () {
    $('.search-mobile').toggleClass('show-search');
  });

  $('.nav-link').on('click', function () {
    if($('.collapse').hasClass('show')){
      $('.collapse').removeClass('show')
    }
    else
    $('.collapse').addClass('show')
  });
  }

}
