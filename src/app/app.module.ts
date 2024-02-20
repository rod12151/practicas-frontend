import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ExportAsModule } from 'ngx-export-as';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';

import { NadvarComponent } from './components/nadvar/nadvar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component'

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import { UserListComponent } from './components/user/user-list/user-list.component';

import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { HomeComponent } from './components/home/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { JefeDashboardComponent } from './pages/jefe/jefe-dashboard/jefe-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';

import { WelcomeComponent } from './pages/admin/welcome/welcome.component';



import { AuthInterceptorProviders } from './services/auth/auth.interceptor';
import { FooterComponent } from './components/footer/footer.component';
import { ViewWorkConditionComponent } from './pages/admin/entities/view-work-condition/view-work-condition.component';
import { AddWorkConditionComponent } from './pages/admin/entities/add-work-condition/add-work-condition.component';
import { ViewLaborRegimeComponent } from './pages/admin/entities/view-labor-regime/view-labor-regime.component';
import { AddLaborRegimeComponent } from './pages/admin/entities/add-labor-regime/add-labor-regime.component';
import { AddServiceComponent } from './pages/admin/entities/add-service/add-service.component';
import { ViewServiceComponent } from './pages/admin/entities/view-service/view-service.component';
import { AddContractComponent } from './pages/admin/entities/add-contract/add-contract.component';
import { ViewContractComponent } from './pages/admin/entities/view-contract/view-contract.component';
import { TableContratoComponent } from './pages/admin/entities/aux-files/table-contrato/table-contrato.component';
import { ExportTableComponent } from './pages/admin/entities/aux-files/export-table/export-table.component';
import { ListJefesComponent } from './pages/admin/entities/list-jefes/list-jefes.component';
import { AddJefesComponent } from './pages/admin/entities/add-jefes/add-jefes.component';
@NgModule({
  declarations: [
    AppComponent,
    NadvarComponent,
    LoginComponent,
    SignupComponent,
    UserListComponent,
    CreateUserComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    JefeDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    FooterComponent,
    ViewWorkConditionComponent,
    AddWorkConditionComponent,
    ViewLaborRegimeComponent,
    AddLaborRegimeComponent,
    AddServiceComponent,
    ViewServiceComponent,
    AddContractComponent,
    ViewContractComponent,
    TableContratoComponent,
    ExportTableComponent,
    ListJefesComponent,
    AddJefesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule, 
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule, NgIf,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    ExportAsModule,
    SweetAlert2Module,
    
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
