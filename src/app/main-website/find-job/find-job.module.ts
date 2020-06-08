import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindJobComponent } from './find-job.component';
import { Route, RouterModule } from '@angular/router';
import { NgxContentLoadingModule } from 'ngx-content-loading';

const routes: Route[]=[
    {
    path: '',
    component: FindJobComponent
    }
]

@NgModule({
  declarations: [FindJobComponent],
  imports: [
    CommonModule,
    NgxContentLoadingModule,
    RouterModule.forChild(routes)
  ]
})

export class FindJobModule { }
