import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProposalPageComponent } from './proposal-page.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]=[
    {
    path: '',
    component: ProposalPageComponent
    }
]

@NgModule({
  declarations: [ProposalPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProposalPageModule { }
