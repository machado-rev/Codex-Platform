import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerRoutingModule } from './employer-routing.module';
import { EmployerComponent } from './employer.component';
import { EmployerSidebarComponent } from './employer-sidebar/employer-sidebar.component';
import { EmployerHeaderComponent } from './employer-header/employer-header.component';

@NgModule({
  declarations: [EmployerComponent, EmployerSidebarComponent, EmployerHeaderComponent],
  imports: [
    CommonModule,
    EmployerRoutingModule
  ]
})

export class EmployerModule { }
