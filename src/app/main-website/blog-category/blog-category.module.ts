import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCategoryComponent } from './blog-category.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: BlogCategoryComponent
    }
]


@NgModule({
  declarations: [BlogCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogCategoryModule { }
