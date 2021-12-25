import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'admin', component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
