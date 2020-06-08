import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { StorageService } from 'src/app/services/storage.service';
import { HttpService } from 'src/app/services/http.service';
declare var $:any;
@Component({
  selector: 'app-freelancer-header',
  templateUrl: './freelancer-header.component.html',
  styleUrls: ['./freelancer-header.component.scss']
})
export class FreelancerHeaderComponent implements OnInit {

  constructor(public router: Router, public share: ShareService, public storage: StorageService, public http: HttpService) { }

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

  logout() {
    this.http.postToBackend('/users/logout',{},this.share.token)
    .then(res=> {
      console.log(res);
      this.storage.destroyUser();
      this.storage.destroyToken();
      this.storage.destroyUserRole();
      this.share.updateUser(null);
      this.share.updateToken(null);
      this.share.updateUserRole(null);
      this.router.navigate(['/']);
    })
  }

}
