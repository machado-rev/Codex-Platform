import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerJobsComponent } from './freelancer-jobs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: FreelancerJobsComponent
    }
]

@NgModule({
  declarations: [FreelancerJobsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FreelancerJobsModule { }
