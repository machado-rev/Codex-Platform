import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobProposalsComponent } from './job-proposals.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: JobProposalsComponent
    }
]

@NgModule({
  declarations: [JobProposalsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JobProposalsModule { }
