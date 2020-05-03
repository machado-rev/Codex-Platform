import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostJobComponent } from './post-job.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: PostJobComponent
    }
]


@NgModule({
  declarations: [PostJobComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostJobModule { }
