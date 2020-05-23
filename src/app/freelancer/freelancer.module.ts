import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerRoutingModule } from './freelancer-routing.module';
import { FreelancerComponent } from './freelancer.component';
import { FreelancerSidebarComponent } from './freelancer-sidebar/freelancer-sidebar.component';
import { FreelancerHeaderComponent } from './freelancer-header/freelancer-header.component';

@NgModule({
  declarations: [FreelancerComponent, FreelancerSidebarComponent, FreelancerHeaderComponent],
  imports: [
    CommonModule,
    FreelancerRoutingModule
  ]
})
export class FreelancerModule { }
