import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDescComponent } from './job-desc.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: JobDescComponent
    }
]

@NgModule({
  declarations: [JobDescComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JobDescModule { }
