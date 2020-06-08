import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSingleComponent } from './blog-single.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: BlogSingleComponent
    }
]


@NgModule({
  declarations: [BlogSingleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogSingleModule { }
