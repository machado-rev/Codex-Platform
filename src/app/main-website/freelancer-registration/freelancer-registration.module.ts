import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerRegistrationComponent } from './freelancer-registration.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: FreelancerRegistrationComponent
    }
]


@NgModule({
  declarations: [FreelancerRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FreelancerRegistrationModule { }
