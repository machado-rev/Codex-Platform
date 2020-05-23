import { Component, OnInit } from '@angular/core';
import { screeningQuestions } from 'src/app/dummy-data/screening-questions';

@Component({
  selector: 'app-freelancer-job-desc',
  templateUrl: './freelancer-job-desc.component.html',
  styleUrls: ['./freelancer-job-desc.component.scss']
})
export class FreelancerJobDescComponent implements OnInit {
  screeningQuestions = [];
  constructor(public questions: screeningQuestions) { }

  ngOnInit(): void {
    this.screeningQuestions = this.questions.questions;

    this.screeningQuestions.forEach(element => {
      element.answer = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis distinctio molestias numquam voluptate itaque harum?";
    });

    
  }

}
