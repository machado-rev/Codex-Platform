import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path:'welcome/:role/:render',
    component: LoginSignupComponent
  },
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'find-job',
    loadChildren: () => import('./find-job/find-job.module').then(m => m.FindJobModule)
  },
  {
    path:'post-job',
    loadChildren: () => import('./post-job/post-job.module').then(m => m.PostJobModule)
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
