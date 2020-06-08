import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerPostBlogComponent } from './employer-post-blog.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {QuillModule} from "ngx-quill";
const routes: Route[]=[
    {
    path: '',
    component: EmployerPostBlogComponent
    }
]

@NgModule({
  declarations: [EmployerPostBlogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    QuillModule,
  ]
})
export class EmployerPostBlogModule { }
