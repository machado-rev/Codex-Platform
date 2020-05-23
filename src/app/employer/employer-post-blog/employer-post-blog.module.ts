import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerPostBlogComponent } from './employer-post-blog.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: EmployerPostBlogComponent
    }
]

@NgModule({
  declarations: [EmployerPostBlogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class EmployerPostBlogModule { }
