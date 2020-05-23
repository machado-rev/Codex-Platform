import { Component, OnInit } from '@angular/core';
import { screeningQuestions } from 'src/app/dummy-data/screening-questions';

@Component({
  selector: 'app-place-bid-form',
  templateUrl: './place-bid-form.component.html',
  styleUrls: ['./place-bid-form.component.scss']
})
export class PlaceBidFormComponent implements OnInit {

  constructor(public questions: screeningQuestions) { }

  ngOnInit(): void {
  }

  screeningQuestions = this.questions.questions;
  
}
