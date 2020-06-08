import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerComponent } from './employer.component';

const routes: Routes = [
  {
    path:'',
    component:EmployerComponent,
    children:[
      {
        path:'',
          loadChildren: () => import('./employer-dashboard/employer-dashboard.module').then(m => m.EmployerDashboardModule)
      },
      {
        path:'post-job',
          loadChildren: () => import('./employer-post-job/employer-post-job.module').then(m => m.EmployerPostJobModule)
      },
      {
        path:'jobs/:state',
        loadChildren: () => import('./employer-jobs/employer-jobs.module').then(m => m.EmployerJobsModule)
      },
      {
        path:'job-proposals/:id',
        loadChildren: () => import('./job-proposals/job-proposals.module').then(m => m.JobProposalsModule)
      },
      {
        path:'proposal/:id',
        loadChildren: () => import('./proposal-page/proposal-page.module').then(m => m.ProposalPageModule)
      },
      {
        path:'blogs/:state',
        loadChildren: () => import('./employer-blogs/employer-blogs.module').then(m => m.EmployerBlogsModule)
      },
      {
        path:'view-blog',
        loadChildren: () => import('./employer-view-blog/employer-view-blog.module').then(m => m.EmployerViewBlogModule)
      },
      {
        path:'post-blog',
        loadChildren: () => import('./employer-post-blog/employer-post-blog.module').then(m => m.EmployerPostBlogModule)
      },
      {
        path:'view-freelancer',
        loadChildren: () => import('./employer-view-freelancer/employer-view-freelancer.module').then(m => m.EmployerViewFreelancerModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }

