import { Component, OnInit } from '@angular/core';
import { screeningQuestions } from 'src/app/dummy-data/screening-questions';
import { FormFunctions } from 'src/app/common/functions/form-general-functions';
import { Expertise } from 'src/app/dummy-data/expertise';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpService } from 'src/app/services/http.service';
import { ShareService } from 'src/app/services/share.service';
import { CategorySpecialization } from 'src/app/dummy-data/category-specialization';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-post-job',
  templateUrl: './employer-post-job.component.html',
  styleUrls: ['./employer-post-job.component.scss'],
})
export class EmployerPostJobComponent implements OnInit {
  constructor(
    public http: HttpService,
    public route: Router,
    public share: ShareService,
    public questions: screeningQuestions,
    public expertiseArr: Expertise,
    public category: CategorySpecialization,
    public formFunc: FormFunctions
  ) {}

  formNumber;
  manyFreelancers: Boolean = false;
  addTalentPreferences: Boolean = false;
  payFixed: Boolean = false;
  payByHour: Boolean = false;
  newJob: Boolean = false;
  submittedForm: Boolean = false;
  expertise = this.expertiseArr.expertiseArr;
  jobCategory = this.category.data;
  jobSpecialization = this.category.data[0].specialization;
  addtionalSkills = this.expertiseArr.additionalSkillsArr;

  //get general screening questions
  screeningQuestions = this.questions.questions;
  //questions selected by the user
  selectedScreeningQuestions = [];
  showScreeningQuestion: Boolean = false;
  showAddQuestionField: Boolean = false;
  userScreeningQuestions = [];
  selectedTechnologies = [{ expertise: 'Advance', options: [] }];

  prefrence = new FormGroup({
    type: new FormControl('any', { validators: Validators.required }),
    location: new FormControl('any location', { validators: Validators.required }),
    success_score: new FormControl('anysuccess', {
      validators: Validators.required,
    }),
    amount_earned: new FormControl('anyamount', {
      validators: Validators.required,
    }),
    english_level: new FormControl('anylevel', {
      validators: Validators.required,
    }),
  });

  jobForm = new FormGroup({
    userName: new FormControl(null, { validators: Validators.required }),
    jobTitle: new FormControl(null, { validators: Validators.required }),
    jobDesc: new FormControl(null, {
      validators: [Validators.required, Validators.minLength(50)],
    }),
    screenQuestion: new FormControl([]),
    jobProjectType: new FormControl(null, { validators: Validators.required }),
    jobProjectLength: new FormControl(null, {
      validators: Validators.required,
    }),
    jobCategory: new FormControl("", { validators: Validators.required }),
    jobSpecialization: new FormControl("", {
      validators: Validators.required,
    }),
    jobBudget: new FormControl(null, { validators: Validators.required }),
    jobBudgetType: new FormControl(null, { validators: Validators.required }),
    freelancerLevel: new FormControl(null, { validators: Validators.required }),
    total_freelancers: new FormControl(null, {
      validators: Validators.required,
    }),
    jobExpertise: new FormControl([], {
      validators: Validators.required,
    }),
    jobPreference: new FormControl(this.prefrence.value, {
      validators: Validators.required,
    }),
    jobVisibility: new FormControl(null, { validators: Validators.required }),
  });

  ngOnInit(): void {
    this.formNumber = 1;
    for (let i = 0; i < this.expertise.length; i++) {
      this.selectedTechnologies.push({
        expertise: this.expertise[i].title,
        options: [],
      });
    }
    //console.log(this.selectedTechnologies);
  }

  jobFiles(files){
    console.log(files);
  }
  //screening questions
  addQuestion(question) {
    if (!question.value) return;
    this.userScreeningQuestions.push(question.value);
    this.jobForm.value.screenQuestion.push(question.value);
    question.value = '';
  }

  deleteQuestion(question){
    for(let i=0;i<this.userScreeningQuestions.length;i++)
    {
      if(this.userScreeningQuestions[i] == question)
      {
        this.userScreeningQuestions.splice(i,1);
        break;
      }
    }
    //console.log(this.userScreeningQuestions);
  }
  toggleScreeningQuestions(question, queToCheck) {
    if (question.checked) {
      this.selectedScreeningQuestions.push(question.value);
      queToCheck.checked = true;
    } else {
      this.selectedScreeningQuestions.forEach((el, index) => {
        if (el == question.value) {
          this.selectedScreeningQuestions.splice(index, 1);
          queToCheck.checked = false;
        }
      });
    }
    this.jobForm.patchValue({
      screenQuestion: this.selectedScreeningQuestions,
    });
  }

  selectTechnology(technology, exp, toCheck) {
    if (technology.checked) {
      toCheck.checked = true;
      for (let i = 0; i < this.selectedTechnologies.length; i++) {
        if (this.selectedTechnologies[i].expertise == exp) {
          this.selectedTechnologies[i].options.push(technology.value);
        }
      }
    } else {
      for (let i = 0; i < this.selectedTechnologies.length; i++) {
        this.selectedTechnologies[i].options.forEach((el, index) => {
          if (el === technology.value) {
            this.selectedTechnologies[i].options.splice(index, 1);
            toCheck.checked = false;
          }
        });
      }
    }

    this.jobForm.patchValue({
      jobExpertise: this.selectedTechnologies,
    });
  }

  selectAdditionalSkills(skill, toCheck) {
    if (skill.checked) {
      this.selectedTechnologies[0].options.push(skill.value);
      toCheck.checked = true;
    } else {
      this.selectedTechnologies[0].options.forEach((el, index) => {
        if (el.value == skill.value) {
          this.selectedTechnologies[0].options.splice(index, 1);
          toCheck.checked = false;
        }
      });
    }

    this.jobForm.patchValue({
      jobExpertise: this.selectedTechnologies,
    });
  }

  categorySelected(event) {
    console.log(event.target.value)
    for(let i=0; i<this.jobCategory.length; i++) {
      if(event.target.value == this.jobCategory[i].category) {
        this.jobSpecialization = this.jobCategory[i].specialization
      }
    }
  }

  //form switching functions
  goNext() {
    console.log(this.jobForm.value);
    console.log(this.jobForm.value.freelancerLevel);
    this.submittedForm = true;
    if (this.formNumber == 1) {
      if (
        this.jobForm.get('jobTitle').invalid ||
        this.jobForm.get('jobCategory').invalid ||
        this.jobForm.get('jobSpecialization').invalid
      ) {
        return;
      }
    } else if (this.formNumber == 2) {
      if (this.jobForm.get('jobDesc').invalid) return;
    } else if (this.formNumber == 3) {
      if (this.jobForm.get('jobProjectType').invalid) return;
    } else if (this.formNumber == 5) {
      if (this.jobForm.get('total_freelancers').invalid) return;
    } else if (this.formNumber == 6) {
      if (
        this.jobForm.get('jobBudgetType').invalid ||
        this.jobForm.get('jobBudget').invalid ||
        this.jobForm.get('freelancerLevel').invalid ||
        this.jobForm.get('jobProjectLength').invalid
      )
        return;
    }
    this.formNumber++;
    this.submittedForm = false;
    console.log('form number', this.formNumber);
  }

  goPrevious() {
    this.formNumber--;
    console.log('form number', this.formNumber);
  }

  postJob() {
    this.jobForm.patchValue({
      userName: this.share.user.username,
      jobPreference: this.prefrence.value,
    });

    console.log(this.jobForm.value);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    if (this.jobForm.invalid) return;

    console.log(this.jobForm.value);

    this.http
      .postToBackend('/jobs/post', this.jobForm.value)
      .then((res: any) => {
        if (res.statusCode == 7000) {
          swalWithBootstrapButtons
            .fire(
              'Congratulations!',
              'You job have been posted successfully!',
              'success'
            )
            .then((res) => {
              this.jobForm.reset();
              this.route.navigate(['/employer/post-job']);
            });
        }
      });
  }
}
