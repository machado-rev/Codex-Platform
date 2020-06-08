import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/dummy-data/freelancer-skills';
import { HttpService } from 'src/app/services/http.service';
import { ShareService } from 'src/app/services/share.service';
declare var $: any;
@Component({
  selector: 'app-edit-freelancer-profile',
  templateUrl: './edit-freelancer-profile.component.html',
  styleUrls: ['./edit-freelancer-profile.component.scss'],
})
export class EditFreelancerProfileComponent implements OnInit {

  constructor(
    public skillsArr: Skills,
    public http: HttpService,
    public share: ShareService
    ) {}

    user;
    submittedForm: Boolean = false;
    selectedTechnologies = this.skillsArr.selectedTechnologies;

    skills = this.skillsArr.skills;

  freelancerRegisteration = new FormGroup({
    image: new FormControl(null),
    userName: new FormControl(null),
    userDescription: new FormControl(null, { validators: Validators.required }),
    userAddress: new FormControl('Select your Country', {
      validators: Validators.required,
    }),
    userSpeciality: new FormControl(null, { validators: Validators.required }),
    hourly_rate: new FormControl(null, { validators: Validators.required }),
    userSkill: new FormControl(null, { validators: Validators.required }),
    experienceLevel: new FormControl(null, {
      validators: Validators.required,
    }),
    userPortfolio: new FormControl([]),
    userWorkingExp: new FormControl([]),
    userQuanlification: new FormControl([]),
  });

  ngOnInit(): void {
    const data = {
      userName: this.share.user.username,
    };
    this.http.postToBackend('/users/get/freelancer', data).then((res: any) => {
      console.log(res);
      this.user = res.data;
      this.freelancerRegisteration.patchValue({
        userName: this.share.user.username,
        userDescription: res.data.userDescription,
        userAddress: res.data.userAddress,
        userSpeciality: res.data.userSpeciality,
        hourly_rate: res.data.hourlyRate,
        userSkill: res.data.userSkill,
        experienceLevel: res.data.experienceLevel,
        userPortfolio: res.data.userPortfolio,
        userWorkingExp: res.data.userWorkingExp,
        userQuanlification: res.data.userQuanlification,
      });
      this.selectedTechnologies = res.data.userSkill;
      for (let i=0;i<this.skills.length;i++) {
        for (let j=0;j<this.skills[i].technologies.length;j++) {
          for (let k=0;k<this.selectedTechnologies.length;k++) {
            if(this.skills[i].technologies[j].title==this.selectedTechnologies[k]) {
              this.skills[i].technologies[j].isChecked=true;
              break;
            }
          }
        }
      }
      this.user = this.freelancerRegisteration.value
    });
  }

  skillSelected = false;
  currentSkill;
  technologyIsSelected: Boolean = false;

  //portfolio forms var and funccitons
  portfolioSubmitted = false;
  portfolioArray = [];
  portfolioForm = new FormGroup({
    title: new FormControl(null, { validators: Validators.required }),
    summary: new FormControl(null, {
      validators: [Validators.required, Validators.minLength(50)],
    }),
    link: new FormControl(null),
    files: new FormControl(null),
  });

  addPortfolio() {
    this.portfolioSubmitted = true;
    if (this.portfolioForm.invalid) {
      return;
    }
    this.portfolioArray.push(this.portfolioForm.value);
    this.freelancerRegisteration.patchValue({
      userPortfolio: this.portfolioArray,
    });
    this.http
    .postToBackend(
      '/users/update/freelancer/profile',
      this.freelancerRegisteration.value
    )
    .then((res: any) => {
      console.log(res);
      this.user = this.freelancerRegisteration.value;
      this.portfolioSubmitted = false;
      this.portfolioForm.reset();
      $('#portfolioModal').modal('hide');
    });
  }

  //experience form variable
  currentlyWorking = false;
  expSubmitted = false;
  expArray = [];
  expForm = new FormGroup({
    title: new FormControl(null, { validators: Validators.required }),
    company: new FormControl(null, { validators: Validators.required }),
    startDate: new FormControl(null, { validators: Validators.required }),
    endDate: new FormControl(null, { validators: Validators.required }),
    summary: new FormControl(null, {
      validators: [Validators.required, Validators.minLength(50)],
    }),
  });

  addExperience(curr) {
    this.expSubmitted = true;
    console.log(this.expForm.value);
    if (this.expForm.invalid) {
      return;
    }
    this.expArray.push(this.expForm.value);
    this.freelancerRegisteration.patchValue({
      userWorkingExp: this.expArray,
    });
    this.http
    .postToBackend(
      '/users/update/freelancer/profile',
      this.freelancerRegisteration.value
    )
    .then((res: any) => {
      console.log(res);
      this.user = this.freelancerRegisteration.value;
      this.expSubmitted = false;
      this.expForm.reset();
      curr.checked = false;
      this.currentlyWorking = false;
      $('#expModal').modal('hide');
    });
  }

  isWorking(curr) {
    if (curr.checked) {
      this.currentlyWorking = true;
      this.expForm.patchValue({
        endDate: 'currently works here',
      });
      //console.log(this.expForm.get('endDate').value);
    } else {
      this.currentlyWorking = false;
      //console.log(this.expForm.get('endDate').value);
      this.expForm.patchValue({
        endDate: null,
      });
    }
  }

  //qualification form vars and functions

  qualSubmitted = false;
  qualArray = [];
  qualForm = new FormGroup({
    certificate: new FormControl(null, { validators: Validators.required }),
    organization: new FormControl(null, { validators: Validators.required }),
    summary: new FormControl(null, {
      validators: [Validators.required, Validators.minLength(50)],
    }),
  });

  addQualification() {
    this.qualSubmitted = true;
    if (this.qualForm.invalid) {
      return;
    }
    this.qualArray.push(this.qualForm.value);
    this.freelancerRegisteration.patchValue({
      userQuanlification: this.qualArray,
    });
    this.qualSubmitted = false;
    this.qualForm.reset();
    $('#qualModal').modal('hide');
  }

  selectSkill(skill: HTMLInputElement) {
    //console.log(skill.value);
    this.skillSelected = true;
    this.skills.forEach((el) => {
      if (el.title == skill.value) this.currentSkill = el;
    });
    //console.log(this.currentSkill.title)
  }

  selectTechnology(technology: HTMLInputElement, tech) {
    //console.log(technology.value, technology.checked);
    if (technology.checked) {
      this.selectedTechnologies.push(technology.value);
      tech.isChecked = true;
    } else {
      this.selectedTechnologies.forEach((el, index) => {
        if (el === technology.value) {
          this.selectedTechnologies.splice(index, 1);
        }
      });
      tech.isChecked = false;
    }
    console.log(this.selectedTechnologies);
    //this.alreadySelected(technology);
  }

  //show edit forms variable and funtions

  showEditForm(element) {
    var content, form, closeBtn, editBtn;

    content = `#${element}-content`;
    form = `#${element}-edit`;
    closeBtn = `#${element}-close-btn`;
    editBtn = `#${element}-edit-btn`;

    $(content).css('display', 'none');
    $(form).css('display', 'block');
    $(editBtn).css('display', 'none');
    $(closeBtn).css('display', 'block');
  }

  closeEditForm(element) {
    var content, form, closeBtn, editBtn;

    content = `#${element}-content`;
    form = `#${element}-edit`;
    closeBtn = `#${element}-close-btn`;
    editBtn = `#${element}-edit-btn`;

    $(content).css('display', 'block');
    $(form).css('display', 'none');
    $(editBtn).css('display', 'block');
    $(closeBtn).css('display', 'none');
  }

  updateProfessionalOverview() {
    this.submittedForm = true;
    if (this.freelancerRegisteration.invalid) {
      return;
    }
    this.http
      .postToBackend(
        '/users/update/freelancer/profile',
        this.freelancerRegisteration.value
      )
      .then((res: any) => {
        console.log(res);
        this.closeEditForm('overview');
        this.user = this.freelancerRegisteration.value;
        this.submittedForm = false;
      });
  }

  updateSkills() {
    if (this.selectTechnology.length<5) {
      return;
    }
    this.http
      .postToBackend(
        '/users/update/freelancer/profile',
        this.freelancerRegisteration.value
      )
      .then((res: any) => {
        console.log(res);
        this.closeEditForm('skillModal');
        this.user = this.freelancerRegisteration.value;
      });
  }

  updateExperienceLevel() {
    this.submittedForm = true;
    if (this.freelancerRegisteration.invalid) {
      return;
    }
    this.http
      .postToBackend(
        '/users/update/freelancer/profile',
        this.freelancerRegisteration.value
      )
      .then((res: any) => {
        console.log(res);
        this.closeEditForm('level');
        this.user = this.freelancerRegisteration.value;
        this.submittedForm = false;
      });
  }

  updateBasicDetails() {
    this.submittedForm = true;
    if (this.freelancerRegisteration.invalid) {
      return;
    }
    this.http
      .postToBackend(
        '/users/update/freelancer/profile',
        this.freelancerRegisteration.value
      )
      .then((res: any) => {
        console.log(res);
        this.closeEditForm('level');
        this.user = this.freelancerRegisteration.value;
        this.submittedForm = false;
      });
  }
}
