import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerJobDescComponent } from './freelancer-job-desc.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: FreelancerJobDescComponent
    }
]


@NgModule({
  declarations: [FreelancerJobDescComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FreelancerJobDescModule { }
