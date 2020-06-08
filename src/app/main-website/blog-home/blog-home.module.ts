import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogHomeComponent } from './blog-home.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: BlogHomeComponent
    }
]


@NgModule({
  declarations: [BlogHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogHomeModule { }
