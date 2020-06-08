import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'src/app/dummy-data/freelancer-skills';
import Swal from 'sweetalert2';
import { ShareService } from 'src/app/services/share.service';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-freelancer-registration',
  templateUrl: './freelancer-registration.component.html',
  styleUrls: ['./freelancer-registration.component.scss'],
})
export class FreelancerRegistrationComponent implements OnInit {
  constructor(
    public route: Router,
    public share: ShareService,
    public http: HttpService,
    public skillsArr: Skills
  ) {}

  formNumber = 4;
  skillSelected = false;
  selectedTechnologies = [];
  currentSkill;
  technologyIsSelected: Boolean = false;
  submittedForm: Boolean = false;

  // skills = this.skillsArr.skills;
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
    userPortfolio: new FormControl([], { validators: Validators.required }),
    userWorkingExp: new FormControl([], { validators: Validators.required }),
    userQuanlification: new FormControl([], {
      validators: Validators.required,
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
    this.expSubmitted = false;
    this.expForm.reset();
    curr.checked = false;
    this.currentlyWorking = false;
    $('#expModal').modal('hide');
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
    this.portfolioSubmitted = false;
    this.portfolioForm.reset();
    $('#portfolioModal').modal('hide');
  }

  addPortfolioFiles(files){
    console.log(files);
  }

  // constructor() { }

  skills = this.skillsArr.skills

  ngOnInit(): void {}

  goNext() {
    if (this.formNumber == 1) {
      if (
        this.freelancerRegisteration.get('userDescription').invalid ||
        this.freelancerRegisteration.get('userAddress').invalid ||
        this.freelancerRegisteration.get('hourly_rate').invalid ||
        this.freelancerRegisteration.get('userSpeciality').invalid
      ) {
        this.submittedForm = true;
        return;
      }
      this.submittedForm = false;
    } else if (this.formNumber == 2) {
      if (this.selectedTechnologies.length < 5) {
        this.submittedForm = true;
        return;
      }
      this.freelancerRegisteration.patchValue({
        userSkill: this.selectedTechnologies,
      });
    } else if (this.formNumber == 3) {
      if (this.freelancerRegisteration.get('experienceLevel').invalid) return;
    }
    console.log(this.freelancerRegisteration.value);
    this.formNumber++;
    console.log('form number', this.formNumber);
  }

  goPrevious() {
    this.formNumber--;
    console.log('form number', this.formNumber);
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

  openForm() {
    $('.forms-container').css('display', 'block');
  }

  closeForm() {
    $('.forms-container').css('display', 'none');
  }

  confirmPopup() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text:
          'You can change the details from your freelancer dashboard afterwards if you want.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, submit!',
        cancelButtonText: 'No, cancel!',
      })
      .then((result) => {
        if (result.value) {
          this.registerFreelancer();
        }
      });
  }
  registerFreelancer() {
    this.freelancerRegisteration.patchValue({
      userName: this.share.user.username,
    });
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    console.log(this.freelancerRegisteration.value);
    this.http
      .postToBackend(
        '/users/update/freelancer/profile',
        this.freelancerRegisteration.value
      )
      .then((res: any) => {
        if (res.statusCode == 7000) {
          swalWithBootstrapButtons
            .fire(
              'Congratulations!',
              'You have been registered as a freelancer on our platform. Welcome to Codex!',
              'success'
            )
            .then((res) => {
              this.route.navigate(['/freelancer']);
            });
        }
      });
  }
}
