import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerViewBlogComponent } from './employer-view-blog.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: EmployerViewBlogComponent
    }
]


@NgModule({
  declarations: [EmployerViewBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployerViewBlogModule { }
