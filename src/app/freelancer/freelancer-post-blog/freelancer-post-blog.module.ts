import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerPostBlogComponent } from './freelancer-post-blog.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: FreelancerPostBlogComponent
    }
]


@NgModule({
  declarations: [FreelancerPostBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FreelancerPostBlogModule { }
