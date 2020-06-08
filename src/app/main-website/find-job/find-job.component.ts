import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
declare var $:any;

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss']
})
export class FindJobComponent implements OnInit {

  jobs=[]
  constructor(public http: HttpService) { }

  ngOnInit(): void {
    $('.option-overlay').on("click",this.toggleFilter);
console.log('hit')
    this.http.postToBackend('/jobs/all/approved',{})
    .then((res: any)=> {
      console.log(res)
      this.jobs = res.data
    })
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
