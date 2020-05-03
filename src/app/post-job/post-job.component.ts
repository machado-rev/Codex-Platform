import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})
export class PostJobComponent implements OnInit {

  formNumber = 0;
  showScreeningQuestion: Boolean = false;
  manyFreelancers:Boolean = false;
  addTalentPreferences:Boolean = false;
  payFixed:Boolean = false;
  payByHour:Boolean = false;
  newJob: Boolean = false;
  screeningQuestions = [
    {
      title:'Do you have any questions about the job description?',
      id:'1'
    },
    {
      title:'Do you have suggestions to make this project run successfully?',
      id:'2'
    }
    ,{
      title:'What challenging part of this job are you most experienced in?',
      id:'3'
    },
    {
      title:'What part of this project most appeals to you?',
      id:'4'
    },
    {
      title:'What past project or job have you had that is most like this one and why?',
      id:'5'
    },
    {
      title:'What questions do you have about the project?',
      id:'6'
    },
    {
      title:'Which of the required job skills do you feel you are strongest at?',
      id:'7'
    }
  ]
  expertise = [
    {
      title:'Front-End Development Deliverables',
      type:'optional',
      options:[
        'Prototype','Web Design','Animation'
      ],
    },
    {
      title:'Front-End Development Languages',
      type:'optional',
      options:[
        'HTML','CSS','JavaScripts','SQL'
      ],
    },
    {
      title:'Front-End Development Skills',
      type:'optional',
      options:[
        'PhotoShop','Google Analytics','.Net'
      ],
    },
    {
      title:'Business Size Experience',
      type:'optional',
      options:[
        'Very Small (1-9)','Small (10-99)','Mid (100-999)','Large (1000+)','Startup','Fortune 500'
      ],
    }
  ]

  addtionalSkills = [
    'HTML','CSS','Website','SCSS', 'React', 'SASS', 'Bootstrap', 'Git', 'Redux', 'JSON', 'Web apps'
  ]

  checkIfOne(value: HTMLInputElement){
    if(value.checked){
      this.manyFreelancers = false;
    }
    
  }
  checkIfMany(value: HTMLInputElement){
    if(value.checked){
      this.manyFreelancers = true;
    }
   
  }

  goNext(){
    this.formNumber++;
    console.log("form number", this.formNumber);
  }

  goPrevious(){
    this.formNumber--;
    console.log("form number", this.formNumber);
  }

  openForm(){
    $('.forms-container').css("display","block");
  }

  closeForm(){
    $('.forms-container').css("display","none");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
