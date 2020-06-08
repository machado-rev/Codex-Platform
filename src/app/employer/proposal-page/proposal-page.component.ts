import { Component, OnInit } from '@angular/core';
import { screeningQuestions } from 'src/app/dummy-data/screening-questions';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-proposal-page',
  templateUrl: './proposal-page.component.html',
  styleUrls: ['./proposal-page.component.scss']
})
export class ProposalPageComponent implements OnInit {

  screeningQuestions = [];
  info;
  constructor(public questions: screeningQuestions, public route: ActivatedRoute, public http: HttpService) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=> {
      console.log(res)
      this.http.postToBackend('/jobs/detail/proposal',{jobId: res.id})
      .then((res: any)=> {
        console.log(res)
        this.info = res.data
        this.screeningQuestions = res.data.question_answered
      })
      .catch(err=> {
        console.log(err)
      });
    })
    // this.screeningQuestions = this.questions.questions;

    // this.screeningQuestions.forEach(element => {
    //   element.answer = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis distinctio molestias numquam voluptate itaque harum?";
    // });
  }

}
