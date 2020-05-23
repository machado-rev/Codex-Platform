import { Component, OnInit } from '@angular/core';
import { JobProposals } from 'src/app/dummy-data/job-proposals';

@Component({
  selector: 'app-job-proposals',
  templateUrl: './job-proposals.component.html',
  styleUrls: ['./job-proposals.component.scss']
})
export class JobProposalsComponent implements OnInit {
  currentHeading = 'all';
  constructor( public proposalsArr : JobProposals) { }

  proposals = [];
  ngOnInit(): void {
    this.proposals = this.proposalsArr.proposalsArr;
  }

}
