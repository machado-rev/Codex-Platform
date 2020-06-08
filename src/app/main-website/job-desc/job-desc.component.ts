import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ShareService } from 'src/app/services/share.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-job-desc',
  templateUrl: './job-desc.component.html',
  styleUrls: ['./job-desc.component.scss']
})
export class JobDescComponent implements OnInit {

  job;
  jobId;
  employer;
  constructor(public route: ActivatedRoute, public navigate_route: Router, public http: HttpService, public share: ShareService) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=> {
      console.log(res.id)
      this.jobId=res.id
      this.http.postToBackend('/jobs/desc',{jobId: res.id})
      .then((res: any)=> {
        console.log(res)
        this.job = res.data.jobDetails
        this.employer = res.data.employer
      })
      .catch(err=> {
        console.log(err)
      })
    })
  }

  placeBid() {
    if(!this.share.token || this.share.role == 'employer') {
      return Swal.fire({
        title: 'Authentication required',
        text: "To place the bid you're required to login as freelancer",
        imageWidth: 100,
        imageUrl: 'assets/img/icon/freelancer.svg',
        showCancelButton: true,
        confirmButtonColor: '#635cdb',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login as freelancer'
      }).then((result) => {
        if (result.value) {
          this.navigate_route.navigate(['/welcome/freelancer/login'])
        }
      })
    }
    this.navigate_route.navigate(['/bid-job',this.jobId])
  }

}
