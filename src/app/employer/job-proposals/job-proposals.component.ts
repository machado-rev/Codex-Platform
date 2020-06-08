import { Component, OnInit } from '@angular/core';
import { JobProposals } from 'src/app/dummy-data/job-proposals';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-proposals',
  templateUrl: './job-proposals.component.html',
  styleUrls: ['./job-proposals.component.scss']
})
export class JobProposalsComponent implements OnInit {
  currentHeading = 'all';
  constructor( public proposalsArr : JobProposals, public router: ActivatedRoute, public http: HttpService) { }

  proposals = [];
  jobId;
  ngOnInit(): void {
    this.router.params.subscribe(res => {
      this.jobId = res.id
      this.http.postToBackend('/jobs/all/proposal',{jobId: res.id})
      .then((res: any)=> {
        console.log(res)
        this.proposals = res.data
      })
      .catch(err=> {
        console.log(err)
      })
    })
  }

  shortlist(account) {
    console.log(account)

    Swal.fire({
      title: 'Shortlist!',
      text: 'Are you confirm to shortlist this candidate?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then(res => {
      if(res.value) {
        this.http.postToBackend('/jobs/add/freelancer/shortlist',{jobId: this.jobId, freelancerAccount: account})
        .then((res: any)=> {
          console.log(res)
          Swal.fire(
            'Shortlisted!',
            'Candidate Shortlisted Successfully',
            'success'
          );
        })
        .catch(err=> {
          console.log(err)
          Swal.fire(
            'Failed!',
            'Failed to shortlist candidate. Please try again...',
            'error'
          );
        })
      }
    })
  }

  hire(account) {

    Swal.fire({
      title: 'Hire!',
      text: 'Are you confirm to hire this candidate?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then(res => {
      if(res.value) {
        this.http.postToBackend('/jobs/add/freelancer/hired',{jobId: this.jobId, freelancerAccount: account})
        .then((res: any)=> {
          console.log(res)
          Swal.fire(
            'Hired!',
            'Candidate Hired Successfully',
            'success'
          );
        })
        .catch(err=> {
          console.log(err)
          Swal.fire(
            'Failed!',
            'Failed to hire candidate. Please try again...',
            'error'
          );
        })
      }
    })
  }

}
