import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FreelancerDashboardComponent } from './freelancer-dashboard.component';

const routes: Route[]=[
    {
    path: '',
    component: FreelancerDashboardComponent
    }
]

@NgModule({
  declarations: [FreelancerDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class FreelancerDashboardModule { }
