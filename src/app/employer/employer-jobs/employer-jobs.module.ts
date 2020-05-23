import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerJobsComponent } from './employer-jobs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: EmployerJobsComponent
    }
]

@NgModule({
  declarations: [EmployerJobsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class EmployerJobsModule { }
