import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss']
})
export class FindJobComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.option-overlay').on("click",this.toggleFilter);
  }

  toggleFilter(){
    console.log("toggle filter");
    if($('.filters').hasClass('show')){
      $('.filters').removeClass('show')
      $('.option-overlay').css("display","none");
    }
    else{
      $('.filters').addClass('show');
      $('.option-overlay').css("display","block");
    }
  }
}
