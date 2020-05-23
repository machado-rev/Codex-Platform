import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerBlogsComponent } from './freelancer-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: FreelancerBlogsComponent
    }
]

@NgModule({
  declarations: [FreelancerBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class FreelancerBlogsModule { }
