import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerPostBlogComponent } from './freelancer-post-blog.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {QuillModule} from "ngx-quill";
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
    ReactiveFormsModule,
    FormsModule,
    QuillModule,
    RouterModule.forChild(routes)
  ]
})
export class FreelancerPostBlogModule { }
