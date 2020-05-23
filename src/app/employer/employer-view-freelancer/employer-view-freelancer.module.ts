import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerViewFreelancerComponent } from './employer-view-freelancer.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: EmployerViewFreelancerComponent
    }
]


@NgModule({
  declarations: [EmployerViewFreelancerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployerViewFreelancerModule { }
