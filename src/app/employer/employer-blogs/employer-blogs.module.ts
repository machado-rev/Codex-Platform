import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerBlogsComponent } from './employer-blogs.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: EmployerBlogsComponent
    }
]

@NgModule({
  declarations: [EmployerBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployerBlogsModule { }
