import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FreelancerJobs } from 'src/app/dummy-data/freelancer-jobs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-freelancer-jobs',
  templateUrl: './freelancer-jobs.component.html',
  styleUrls: ['./freelancer-jobs.component.scss'],
})
export class FreelancerJobsComponent implements OnInit {
  filter;
  constructor(
    public state: ActivatedRoute,
    public jobsArr: FreelancerJobs,
    public http: HttpService
  ) {}
  currentHeading;
  showFilter;
  jobsToDisplay = [];
  jobs = this.jobsArr.jobsArr;

  ngOnInit(): void {
    this.state.params.subscribe((result) => {
      this.filter = result.state;

      if (this.filter == 'active') {
        this.getActiveJobs();
        this.currentHeading = 'active';
      } else if (this.filter == 'completed') {
        this.getCompletedJobs();
        this.currentHeading = 'completed';
      } else if (this.filter == 'pending') {
        this.getPendingJobs();
        this.currentHeading = 'pending';
      } else {
        this.getAllJobs();
        this.currentHeading = 'applied';
      }
    });
  }

  getAllJobs() {
    this.showFilter = true;
    this.http
      .postToBackend('/users/freelancer/applied/jobs', {})
      .then((res: any) => {
        console.log(res);
        this.jobsToDisplay = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getActiveJobs() {
    this.showFilter = false;
    this.filterActiveJobs();
  }
  getCompletedJobs() {
    this.showFilter = false;
    this.filterCompletedJobs();
  }
  getPendingJobs() {
    this.showFilter = false;
    this.filterPendingJobs();
  }

  filterAllJobs() {
    this.jobsToDisplay = [];
    this.currentHeading = 'applied';
    this.jobsToDisplay = this.jobs;
  }

  filterActiveJobs() {
    this.jobsToDisplay = [];
    this.currentHeading = 'active';
    this.jobs.forEach((el) => {
      if (el.status == 'active') {
        this.jobsToDisplay.push(el);
      }
    });
  }
  filterCompletedJobs() {
    this.jobsToDisplay = [];
    this.currentHeading = 'completed';
    this.jobs.forEach((el) => {
      if (el.status == 'completed') {
        this.jobsToDisplay.push(el);
      }
    });
  }
  filterPendingJobs() {
    this.jobsToDisplay = [];
    this.currentHeading = 'pending';
    this.jobs.forEach((el) => {
      if (el.status == 'pending') {
        this.jobsToDisplay.push(el);
      }
    });
  }
  filterRejectedJobs() {
    this.jobsToDisplay = [];
    this.currentHeading = 'rejected';
    this.jobs.forEach((el) => {
      if (el.status == 'rejected') {
        this.jobsToDisplay.push(el);
      }
    });
  }
}
