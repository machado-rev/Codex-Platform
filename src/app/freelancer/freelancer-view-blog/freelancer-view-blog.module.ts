import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerViewBlogComponent } from './freelancer-view-blog.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: FreelancerViewBlogComponent
    }
]


@NgModule({
  declarations: [FreelancerViewBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FreelancerViewBlogModule { }
