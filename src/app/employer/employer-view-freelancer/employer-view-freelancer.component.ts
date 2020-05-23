import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/dummy-data/freelancer-skills';
import { FreelacerDetails } from 'src/app/dummy-data/freelancer-details';

@Component({
  selector: 'app-employer-view-freelancer',
  templateUrl: './employer-view-freelancer.component.html',
  styleUrls: ['./employer-view-freelancer.component.scss']
})
export class EmployerViewFreelancerComponent implements OnInit {

  constructor(public technologies: Skills,public freelancerDetails: FreelacerDetails) { }
  selectedTechnologies = [];
  qualArray = [];
  expArray = [];
  portfolioArray = [];
  ngOnInit(): void {
    this.selectedTechnologies = this.technologies.selectedTechnologies;
    this.portfolioArray = this.freelancerDetails.portfolio;
    this.expArray = this.freelancerDetails.experience;
    this.qualArray = this.freelancerDetails.qualifications;
  }

}
