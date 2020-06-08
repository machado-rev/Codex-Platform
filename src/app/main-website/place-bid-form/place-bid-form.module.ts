import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceBidFormComponent } from './place-bid-form.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[]=[
    {
    path: '',
    component: PlaceBidFormComponent
    }
]

@NgModule({
  declarations: [PlaceBidFormComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PlaceBidFormModule { }
