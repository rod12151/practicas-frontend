import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRequest, UserResponse } from '../models/usuario';
import baserUrl from './helper';
import { ServicioResponse } from '../models/servicios';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  

  constructor(
    private httpClient: HttpClient
    ) { }

  findAllUsers():Observable<UserResponse[]>{
    
    return this.httpClient.get<UserResponse[]>(`${baserUrl}/user`);
    
  }
  createUser(userRequest:UserRequest):Observable<Object>{
    return this.httpClient.post(`${baserUrl}/user/create`,userRequest);
  }

  getUsuariosSinContrato(query: string):Observable<UserResponse[]>{
    return this.httpClient.get<UserResponse[]>(`${baserUrl}/user/no/contract?query=${query}`);
  }

  changeStatus(dni:string):Observable<any>{
    return this.httpClient.put<any>(`${baserUrl}/user/${dni}`,'');
  }
  
  public findUserSAsingmentsService(query:String):Observable<any>{
    return this.httpClient.get<UserResponse[]>(`${baserUrl}/user/user/assign?query=${query}`)
  };
  public findBossAsingmentsService(query:String):Observable<any>{
    return this.httpClient.get<UserResponse[]>(`${baserUrl}/user/boss/assign?query=${query}`)
  };

  public actualizarUsuario(dni:string,user:UserRequest):Observable<UserResponse>{
    return this.httpClient.put<UserResponse>(`${baserUrl}/user/user/update?dni=${dni}`,user)
  }

}
