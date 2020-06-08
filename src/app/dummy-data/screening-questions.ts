import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class screeningQuestions {
    questions = [
    {
      title:'Do you have any questions about the job description?',
      id:'1',
      checked: false
    },
    {
      title:'Do you have suggestions to make this project run successfully?',
      id:'2',
      checked: false
    }
    ,{
      title:'What challenging part of this job are you most experienced in?',
      id:'3',
      checked: false
    },
    {
      title:'What part of this project most appeals to you?',
      id:'4',
      checked: false
    },
    {
      title:'What past project or job have you had that is most like this one and why?',
      id:'5',
      checked: false
    },
    {
      title:'What questions do you have about the project?',
      id:'6',
      checked: false
    },
    {
      title:'Which of the required job skills do you feel you are strongest at?',
      id:'7',
      checked: false
    }
  ]


}
