import { Component, OnInit } from '@angular/core';
import { screeningQuestions } from 'src/app/dummy-data/screening-questions';
import { FormFunctions } from 'src/app/common/styles/functions/form-general-functions';
import { Expertise } from 'src/app/dummy-data/expertise';

@Component({
  selector: 'app-employer-post-job',
  templateUrl: './employer-post-job.component.html',
  styleUrls: ['./employer-post-job.component.scss']
})
export class EmployerPostJobComponent implements OnInit {

  constructor(public questions: screeningQuestions, public expertiseArr: Expertise, public formFunc: FormFunctions) { }
  
  formNumber;
  manyFreelancers:Boolean = false;
  addTalentPreferences:Boolean = false;
  payFixed:Boolean = false;
  payByHour:Boolean = false;
  newJob: Boolean = false;
  expertise = this.expertiseArr.expertiseArr;
  addtionalSkills = this.expertiseArr.additionalSkillsArr;

  //get general screening questions 
  screeningQuestions = this.questions.questions;
  //questions selected by the user
  selectedScreeningQuestions = [];
  showScreeningQuestion: Boolean = false;
  showAddQuestionField: Boolean = false;
  userScreeningQuestions = []

   //screening questions 
  addQuestion(question){
    if(!question.value)
    return;
    this.userScreeningQuestions.push(question.value);
    question.value = "";
  }
  
  toggleScreeningQuestions(question){
    if(question.checked){
      this.selectedScreeningQuestions.push(question.value);
    }
    else{
      this.selectedScreeningQuestions.forEach((el,index )=> {
        if(el == question.value){
          this.selectedScreeningQuestions.splice(index,1);
        }
      })
    }
  }

  //form switching functions
  goNext(){
    this.formNumber++;
    console.log("form number", this.formNumber);
  }

  goPrevious(){
    this.formNumber--;
    console.log("form number", this.formNumber);
  }


  ngOnInit(): void {
    this.formNumber = 0;
  }

}
