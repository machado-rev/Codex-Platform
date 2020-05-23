import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Skills } from 'src/app/dummy-data/freelancer-skills';
declare var $ :any;
@Component({
  selector: 'app-edit-freelancer-profile',
  templateUrl: './edit-freelancer-profile.component.html',
  styleUrls: ['./edit-freelancer-profile.component.scss']
})
export class EditFreelancerProfileComponent implements OnInit {

  constructor(public skillsArr: Skills) { }

  ngOnInit(): void {
  }

  //dummy data

  selectedTechnologies = this.skillsArr.selectedTechnologies;

  skills = this.skillsArr.skills;

  skillSelected = false;
  currentSkill;
  technologyIsSelected:Boolean =false;

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

  selectSkill(skill:HTMLInputElement){
    //console.log(skill.value);
    this.skillSelected = true;
    this.skills.forEach(el => {
      if (el.title == skill.value)
      this.currentSkill = el;
    })
    //console.log(this.currentSkill.title)
  }

  selectTechnology(technology: HTMLInputElement){
    //console.log(technology.value, technology.checked);
    if(technology.checked){
      this.selectedTechnologies.push(technology.value);
    }
    else{
      this.selectedTechnologies.forEach((el,index) => {
        if(el === technology.value){
          this.selectedTechnologies.splice(index,1);
        }
      })
    }
    //this.alreadySelected(technology);
  }

  //show edit forms variable and funtions

  showEditForm(element){
    var content,form, closeBtn, editBtn;
    
    content = `#${element}-content`;
    form = `#${element}-edit`;
    closeBtn = `#${element}-close-btn`;
    editBtn =  `#${element}-edit-btn`;

    $(content).css("display","none");
    $(form).css("display","block");
    $(editBtn).css("display","none");
    $(closeBtn).css("display","block");
  }

  closeEditForm(element){
    var content,form, closeBtn, editBtn;

    content = `#${element}-content`;
    form = `#${element}-edit`;
    closeBtn = `#${element}-close-btn`;
    editBtn =  `#${element}-edit-btn`;

    $(content).css("display","block");
    $(form).css("display","none");
    $(editBtn).css("display","block");
    $(closeBtn).css("display","none");
  }

}
