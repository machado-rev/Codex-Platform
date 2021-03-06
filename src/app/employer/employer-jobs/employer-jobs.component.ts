import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerJobs } from 'src/app/dummy-data/employer-jobs';
import { HttpService } from 'src/app/services/http.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-employer-jobs',
  templateUrl: './employer-jobs.component.html',
  styleUrls: ['./employer-jobs.component.scss']
})
export class EmployerJobsComponent implements OnInit {

  filter;
  constructor(public state: ActivatedRoute, public jobsArr: EmployerJobs, public http: HttpService, public share: ShareService) { }
  currentHeading;
  showFilter;
  jobsToDisplay = [];
  jobs = this.jobsArr.jobsArr;

  ngOnInit(): void {
    this.state.params.subscribe(result => {
      this.filter = result.state;

      if(this.filter == 'active'){
        this.getActiveJobs();
        this.currentHeading = 'active';
      }

      else if(this.filter == 'completed'){
        this.getCompletedJobs();
        this.currentHeading = 'completed';
      }

      else{
        this.getAllJobs();
        this.currentHeading = 'posted';
      }
    });
  }

  getAllJobs(){
    this.showFilter = true;
    this.http.postToBackend('/users/employer/jobs',{userName: this.share.user.username})
    .then((res: any)=> {
      console.log(res)
      this.jobsToDisplay = res.data;
    })
    .catch(err=> {
      console.log(err)
    })
  }

  getActiveJobs(){
    this.showFilter = false;
    this.filterActiveJobs();
  }
  getCompletedJobs(){
    this.showFilter = false;
    this.filterCompletedJobs();
  }

  filterAllJobs(){
    this.jobsToDisplay = [];
    this.currentHeading = 'posted';
    this.jobsToDisplay = this.jobs;
  }

  filterActiveJobs(){
    this.jobsToDisplay = [];
    this.currentHeading = 'active';
    this.jobs.forEach(el => {
      if(el.status == 'active'){
        this.jobsToDisplay.push(el);
      }
    })
  }

  filterCompletedJobs(){
    this.jobsToDisplay = [];
    this.currentHeading = 'completed';
    this.jobs.forEach(el => {
      if(el.status == 'completed'){
        this.jobsToDisplay.push(el);
      }
    })
  }

  filterDeletedJobs(){
    this.jobsToDisplay = [];
    this.currentHeading = 'deleted';
    this.jobs.forEach(el => {
      if(el.status == 'rejected'){
        this.jobsToDisplay.push(el);
      }
    })
  }


}
