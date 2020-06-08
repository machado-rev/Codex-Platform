import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './main-website/login-signup/login-signup.component';
import { HomepageComponent } from './main-website/homepage/homepage.component';
import { MainWebsiteComponent } from './main-website/main-website.component';

const routes: Routes = [
  {
    path:'',
    component: MainWebsiteComponent,
    children:[
      {
        path:'',
        component:HomepageComponent
      },
      {
        path:'welcome/:role/:render',
        loadChildren: () => import('./main-website/login-signup/login-signup.module').then(m => m.LoginSignupModule)
      },
      {
        path:'find-job',
        loadChildren: () => import('./main-website/find-job/find-job.module').then(m => m.FindJobModule)
      },
      {
        path:'post-job',
        loadChildren: () => import('./main-website/post-job/post-job.module').then(m => m.PostJobModule)
      },
      {
        path:'register-freelancer',
        loadChildren: () => import('./main-website/freelancer-registration/freelancer-registration.module').then(m => m.FreelancerRegistrationModule)
      },
      {
        path:'job-desc/:id',
        loadChildren: () => import('./main-website/job-desc/job-desc.module').then(m => m.JobDescModule)
      },
      {
        path:'bid-job/:id',
        loadChildren: () => import('./main-website/place-bid-form/place-bid-form.module').then(m => m.PlaceBidFormModule)
      },
      {
        path:'blog',
        loadChildren: () => import('./main-website/blog-home/blog-home.module').then(m => m.BlogHomeModule)
      },
      {
        path:'blog/post',
        loadChildren: () => import('./main-website/blog-single/blog-single.module').then(m => m.BlogSingleModule)
      },
      {
        path:'blog/category',
      loadChildren: () => import('./main-website/blog-category/blog-category.module').then(m => m.BlogCategoryModule)
      }
    ]
  },
  {
    path:'freelancer',
    loadChildren: () => import('./freelancer/freelancer.module').then(m => m.FreelancerModule)
  },
  {
    path:'employer',
    loadChildren: () => import('./employer/employer.module').then(m => m.EmployerModule)
  }
  // {
  //   path: '**',
  //   redirectTo: '/',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
