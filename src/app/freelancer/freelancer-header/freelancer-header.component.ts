import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-freelancer-header',
  templateUrl: './freelancer-header.component.html',
  styleUrls: ['./freelancer-header.component.scss']
})
export class FreelancerHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 1199){
      $('#toggleBtn').on("click",this.toggleSidebar);
      $('.sidenav-link').on("click",this.toggleSidebar);
      $('.option-overlay').on("click",this.toggleSidebar);
    }
  }

  toggleSidebar(){
    if($('#sidenav-main').hasClass('show-menu')){
      $('#sidenav-main').removeClass('show-menu');
      $('.hamburger').removeClass('clicked');
      $('.option-overlay').css("display","none");
    }
    else{
      $('#sidenav-main').addClass('show-menu');
      $('.hamburger').addClass('clicked');
      $('.option-overlay').css("display","block");
    }

  }

}
