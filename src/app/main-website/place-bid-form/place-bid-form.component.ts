import { Component, OnInit } from '@angular/core';
import { screeningQuestions } from 'src/app/dummy-data/screening-questions';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ShareService } from 'src/app/services/share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-place-bid-form',
  templateUrl: './place-bid-form.component.html',
  styleUrls: ['./place-bid-form.component.scss'],
})
export class PlaceBidFormComponent implements OnInit {
  form = new FormGroup({
    jobId: new FormControl(null),
    freelancerAccount: new FormControl(null),
    proposalDesc: new FormControl(null, {
      validators: [Validators.required, Validators.minLength(50)],
    }),
    offeredPrice: new FormControl(null, { validators: [Validators.required] }),
    completeTime: new FormControl('', { validators: [Validators.required] }),
    questionAnswered: new FormControl([], {
      validators: [Validators.required],
    }),
  });
  job;
  jobId;
  screeningQuestions = [];
  submitted: Boolean = false;
  constructor(
    public questions: screeningQuestions,
    public route: ActivatedRoute,
    public http: HttpService,
    public share: ShareService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.jobId = res.id;
      this.http
        .postToBackend('/jobs/bid/screening-que', {
          jobId: res.id,
          freelancerAccount: this.share.user.username,
        })
        .then((res: any) => {
          console.log(res);

          if (res.statusCode === 7000) {
            this.job = res.data;
            this.job.jobScreeningQuestions.forEach((el) => {
              this.screeningQuestions.push({ que: el, ans: '' });
            });
          } else {
            this.router.navigate(['/job-desc', this.jobId]);
          }
        })
        .catch((err) => {
          console.log(err);
          this.router.navigate(['/job-desc', this.jobId]);
        });
    });
  }

  placeBid() {
    this.submitted = true;
    this.form.patchValue({
      jobId: this.jobId,
      freelancerAccount: this.share.user.username,
      questionAnswered: this.screeningQuestions,
    });
    console.log(this.form.value);
    if (this.form.invalid) {
      return;
    }

    Swal.fire({
      title: 'Confirmation for your bid!',
      text: 'Are you sure you want to place this bid.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.http
          .postToBackend('/jobs/add/freelancer/applied', this.form.value)
          .then((res) => {
            console.log(res);
            Swal.fire(
              'Bidding Successfull!',
              'Your bidding for the job is successfull',
              'success'
            );
            this.form.reset();
            this.router.navigate(['/find-job']);
          })
          .catch((err) => {
            console.log(err);
            Swal.fire(
              'Bidding Failed!',
              'Your bidding for the job failed. Please try after some time.',
              'error'
            );
          });
      }
    });
  }
}
