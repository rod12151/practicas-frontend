import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { tap } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { DecodeToken, Roles } from 'src/app/services/helper';
import { take, switchMap } from 'rxjs/operators';
import { LoginRequest } from 'src/app/services/auth/loginRequest';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginError: string = "";

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }
  get username() {
    return this.loginForm.controls.username
  }
  get password() {
    return this.loginForm.controls.password
  }



  formSumit() {
    if (this.loginForm.valid) {

      const credencials = this.loginForm.value as LoginRequest;

      this.authService.login(credencials).subscribe({
        next: (loginData) => {
          
          const dni = loginData['username'].slice(0, 8);
          
          const tokenDec = jwt_decode.default(loginData.token) as DecodeToken;


          this.authService.setRole(new Roles(tokenDec.isAdmin, tokenDec.isJefe, tokenDec.isUser));

          
          
          this.authService.optenerUsuarioActual(dni).subscribe();
          this.authService.loginUser(loginData.token);
          

        },
        error: (errorData) => {
          this.loginError = errorData;
          this.loginForm.controls.password.reset();

        },
        complete: () => {
          
          
          if (this.authService.getRole().isAdmin) {
            this.router.navigate(['/admin']);
          } else if (this.authService.getRole().isJefe) {
            this.router.navigate(['jefe-dashboard']);
          } else if (this.authService.getRole().isUser) {
            this.router.navigate(['/user-dashboard']);
          } else {
            this.authService.logout();
            this.router.navigate(['']);
          }
          this.loginForm.reset();

        }
      });
    } else {
      this.loginForm.markAllAsTouched();
      alert("El email debe tener un formato valido y la contraseña es requerida")
    }
    
  }
}
