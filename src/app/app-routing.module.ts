import { Component, NgModule } from '@angular/core';
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
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewWorkConditionComponent } from './pages/admin/entities/view-work-condition/view-work-condition.component';
import { AddWorkConditionComponent } from './pages/admin/entities/add-work-condition/add-work-condition.component';
import { ViewLaborRegimeComponent } from './pages/admin/entities/view-labor-regime/view-labor-regime.component';
import { AddLaborRegimeComponent } from './pages/admin/entities/add-labor-regime/add-labor-regime.component';
import { AddServiceComponent } from './pages/admin/entities/add-service/add-service.component';
import { ViewServiceComponent } from './pages/admin/entities/view-service/view-service.component';
import { AddContractComponent } from './pages/admin/entities/add-contract/add-contract.component';
import { ViewContractComponent } from './pages/admin/entities/view-contract/view-contract.component';
import { ListJefesComponent } from './pages/admin/entities/list-jefes/list-jefes.component';
import { AddJefesComponent } from './pages/admin/entities/add-jefes/add-jefes.component';
import { AsigUserServiceComponent } from './pages/asig-user-service/asig-user-service.component';
import { ListUserServiceComponent } from './pages/list-user-service/list-user-service.component';
import { EditProfileComponent } from './pages/profile/edit-profile/edit-profile.component';
import { EditServRegConComponent } from './pages/admin/edit-serv-reg-con/edit-serv-reg-con.component';
import { ViewContractForDateComponent } from './pages/admin/entities/view-contract-for-date/view-contract-for-date.component';
import { ViewDetalleServiceComponent } from './pages/componentShare/view-detalle-service/view-detalle-service.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home', component:HomeComponent},
 
  
  {path:'login',component:LoginComponent},
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[adminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'welcome',
        component: WelcomeComponent
      },
      {
        path: 'userlist',
        component:UserListComponent
      },
      {path: 'createuser',
      component:CreateUserComponent},
      {
        path:'addworkcondition',
        component:AddWorkConditionComponent
      },
      {
        path:'workcondition',
        component:ViewWorkConditionComponent
      },
      {
        path:'laborRegime',
        component:ViewLaborRegimeComponent
      },
      {
        path:'addLaborRegime',
        component:AddLaborRegimeComponent
      },
      {
        path:'addServices',
        component:AddServiceComponent
      },
      {
        path:'Services',
        component:ViewServiceComponent
      },
      {
        path:'ServiceDetalle',
        component:ViewDetalleServiceComponent
      },
      {
        path:'addContract',
        component:AddContractComponent
      },
      {
        path:'viewContract',
        component:ViewContractComponent
      },{
        path:'viewContractDate',
        component:ViewContractForDateComponent
      },
      {
        path:'listJefes',
        component:ListJefesComponent
      },
      {
        path:'addJefes',
        component:AddJefesComponent
      },
      {
        path:'addUserService',
        component:AsigUserServiceComponent
      },
      {
        path:'listUserService',
        component:ListUserServiceComponent
      },
      {
        path:'editarPerfil',
        component:EditProfileComponent

      },
      {
        path:'editarComp',
        component:EditServRegConComponent
      }
    ]
  },
    
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'jefe-dashboard', component:JefeDashboardComponent,canActivate:[jefeGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
