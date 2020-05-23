import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { EmployerDashboardComponent } from './employer-dashboard.component';

const routes: Route[]=[
    {
    path: '',
    component: EmployerDashboardComponent
    }
]


@NgModule({
  declarations: [EmployerDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployerDashboardModule { }
