import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostJobComponent } from './post-job.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Route[]=[
    {
    path: '',
    component: PostJobComponent
    }
]

@NgModule({
  declarations: [PostJobComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,ReactiveFormsModule
  ]
})
export class PostJobModule { }
