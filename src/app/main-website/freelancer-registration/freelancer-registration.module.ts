import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerRegistrationComponent } from './freelancer-registration.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFilesModule } from 'src/app/common/components/upload-files/upload-files.module';

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
    UploadFilesModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FreelancerRegistrationModule { }
