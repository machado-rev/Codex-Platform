import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreelancerComponent } from './freelancer.component';

const routes: Routes = [
  {
    path:'',
    component:FreelancerComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./freelancer-dashboard/freelancer-dashboard.module').then(m => m.FreelancerDashboardModule)
      },
      {
        path:'jobs/:state',
        loadChildren: () => import('./freelancer-jobs/freelancer-jobs.module').then(m => m.FreelancerJobsModule)
      },
      {
        path:'blogs/:state',
        loadChildren: () => import('./freelancer-blogs/freelancer-blogs.module').then(m => m.FreelancerBlogsModule)
      },
      {
        path:'post-blog',
        loadChildren: () => import('./freelancer-post-blog/freelancer-post-blog.module').then(m => m.FreelancerPostBlogModule)
      },
      {
        path:'view-blog',
        loadChildren: () => import('./freelancer-view-blog/freelancer-view-blog.module').then(m => m.FreelancerViewBlogModule)
      },
      {
        path:'profile',
        loadChildren: () => import('./edit-freelancer-profile/edit-freelancer-profile.module').then(m => m.EditFreelancerProfileModule)
      },
      {
        path:'job-desc',
        loadChildren: () => import('./freelancer-job-desc/freelancer-job-desc.module').then(m => m.FreelancerJobDescModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerRoutingModule { }
