import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Skills } from 'src/app/dummy-data/freelancer-skills';
declare var $ :any;
@Component({
  selector: 'app-freelancer-registration',
  templateUrl: './freelancer-registration.component.html',
  styleUrls: ['./freelancer-registration.component.scss']
})
export class FreelancerRegistrationComponent implements OnInit {

  constructor(public skillsArr: Skills) { }

  formNumber = 1;
  skillSelected = false;
  selectedTechnologies = [];
  currentSkill;
  technologyIsSelected:Boolean =false;


  skills = this.skillsArr.skills;
  //experience form variable
  currentlyWorking = false;
  expSubmitted = false;
  expArray = [];
  expForm = new FormGroup ({
    title: new FormControl(null,{validators:Validators.required}),
    company: new FormControl(null,{validators:Validators.required}),
    startDate: new FormControl(null,{validators:Validators.required}),
    endDate: new FormControl(null,{validators:Validators.required}),
    summary: new FormControl(null,{validators:[Validators.required,Validators.minLength(50)]})
  })

  addExperience(curr){
    this.expSubmitted = true;
    console.log(this.expForm.value);
    if(this.expForm.invalid){
      return;
    }
    this.expArray.push(this.expForm.value);
    this.expSubmitted = false;
    this.expForm.reset();
    curr.checked = false;
    this.currentlyWorking = false;
    $('#expModal').modal('hide');

  }

  isWorking(curr){
    if(curr.checked){
      this.currentlyWorking = true;
      this.expForm.patchValue({
        endDate:'currently works here'
      })
      //console.log(this.expForm.get('endDate').value);

    }
    else{
      this.currentlyWorking = false;
      //console.log(this.expForm.get('endDate').value);
      this.expForm.patchValue({
        endDate:null
      })
    }
  }

  //qualification form vars and functions

  qualSubmitted = false;
  qualArray = [];
  qualForm = new FormGroup ({
    certificate: new FormControl(null,{validators:Validators.required}),
    organization: new FormControl(null,{validators:Validators.required}),
    summary: new FormControl(null,{validators:[Validators.required,Validators.minLength(50)]})
  })

  addQualification(){
    this.qualSubmitted = true;
    if(this.qualForm.invalid){
      return;
    }
    this.qualArray.push(this.qualForm.value);
    this.qualSubmitted = false;
    this.qualForm.reset();
    $('#qualModal').modal('hide');
  }

  //portfolio forms var and funccitons
  portfolioSubmitted = false;
  portfolioArray = [];
  portfolioForm = new FormGroup ({
    title: new FormControl(null,{validators:Validators.required}),
    summary: new FormControl(null,{validators:[Validators.required,Validators.minLength(50)]}),
    link: new FormControl(null),
    files : new FormControl(null)
  })

  addPortfolio(){
    this.portfolioSubmitted = true;
    if(this.portfolioForm.invalid){
      return;
    }
    this.portfolioArray.push(this.portfolioForm.value);
    this.portfolioSubmitted = false;
    this.portfolioForm.reset();
    $('#portfolioModal').modal('hide');
  }



  ngOnInit(): void {
  }


  goNext(){
    this.formNumber++;
    console.log("form number", this.formNumber);
  }

  goPrevious(){
    this.formNumber--;
    console.log("form number", this.formNumber);
  }

  selectSkill(skill:HTMLInputElement){
    //console.log(skill.value);
    this.skillSelected = true;
    this.skills.forEach(el => {
      if (el.title == skill.value)
      this.currentSkill = el;
    })
    //console.log(this.currentSkill.title)
  }

  selectTechnology(technology: HTMLInputElement, tech){
    //console.log(technology.value, technology.checked);
    if(technology.checked){
      this.selectedTechnologies.push(technology.value);
      tech.isChecked = true;
    }
    else{
      this.selectedTechnologies.forEach((el,index) => {
        if(el === technology.value){
          this.selectedTechnologies.splice(index,1);
        }
      })
      tech.isChecked = false;
    }
    console.log(this.selectedTechnologies)
    //this.alreadySelected(technology);
  }

  openForm(){
    $('.forms-container').css("display","block");
  }

  closeForm(){
    $('.forms-container').css("display","none");
  }

}
