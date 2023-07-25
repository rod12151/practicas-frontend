import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import { UserListComponent } from './components/user/user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './components/home/home/home.component';
import * as jwt_decode from 'jwt-decode';
import { AuthInterceptorProviders } from './services/auth/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { JefeDashboardComponent } from './pages/jefe/jefe-dashboard/jefe-dashboard.component';
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
    JefeDashboardComponent
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
    MatToolbarModule
    
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
