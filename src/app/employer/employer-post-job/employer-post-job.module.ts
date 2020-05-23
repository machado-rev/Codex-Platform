import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerPostJobComponent } from './employer-post-job.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: EmployerPostJobComponent
    }
]

@NgModule({
  declarations: [EmployerPostJobComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployerPostJobModule { }
