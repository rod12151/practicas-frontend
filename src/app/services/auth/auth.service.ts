import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError,Subject, map } from 'rxjs';
import { Injectable } from '@angular/core';
import baserUrl,{Roles} from '../helper';
import { LoginRequest } from './loginRequest';
import { LoginResponse } from './loginResponse';
import { catchError, tap } from 'rxjs/operators';
import { UserRequest, UserResponse } from 'src/app/models/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private http:HttpClient) {}

  userActual: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  loginData : BehaviorSubject<LoginResponse> = new BehaviorSubject<LoginResponse>({
    token: '',
    message: '',
    username: ''
  });


 

  login(credencials:LoginRequest):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${baserUrl}/login`,credencials).pipe(
      tap((loginResponse:LoginResponse)=>{
        loginResponse['token']
      }),
      catchError(this.handlerError)
    );

  }
  private handlerError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error', error.error);
    } else {
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(() =>error.error.message);
  }


  //generar token

    //iniciamos sesion y agreagr token al localStorage
  public loginUser(token:any){
      
        localStorage.setItem('token',token);
    
   }
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined|| tokenStr==''||tokenStr==null){
      return false;
    }else{
      return true;
    }
  }
  //cerrar Sesion y eliminar token del localStorage

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user')
    localStorage.removeItem('roles')
    return true;
  }

  //optener token
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:UserResponse){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
     //this.logout();
      return null;
    }
  }
public optenerUsuarioActual(dni:string):Observable<any>{
  return this.http.get(`${baserUrl}/user/${dni}`).pipe(
    tap((user:any)=>{
      console.log(user)
      this.userActual.next(user);
      this.setUser(user);
    })
  )
}

 

 public setRole(roles:Roles){
  localStorage.setItem('roles',JSON.stringify(roles));

 }
 public getRole(){
  let roleaux = localStorage.getItem('roles');
  if (roleaux !=null){
    let role =JSON.parse(roleaux)
    return role;

  }
  return null;
 }
  }
