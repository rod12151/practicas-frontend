import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { JefeDashboardComponent } from './pages/jefe/jefe-dashboard/jefe-dashboard.component';
import { adminGuard } from './guards/admin.guard';
import { jefeGuard } from './guards/jefe.guard';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path: 'userlist', component:UserListComponent},
  {path: 'createuser',component:CreateUserComponent,canActivate:[adminGuard]},
  {path:'login',component:LoginComponent},
  {path:'admin',component:DashboardComponent,canActivate:[adminGuard]},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'jefe-dashboard', component:JefeDashboardComponent,canActivate:[jefeGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }