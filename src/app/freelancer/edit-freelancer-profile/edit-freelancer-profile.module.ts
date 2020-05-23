import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFreelancerProfileComponent } from './edit-freelancer-profile.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: EditFreelancerProfileComponent
    }
]

@NgModule({
  declarations: [EditFreelancerProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditFreelancerProfileModule { }
