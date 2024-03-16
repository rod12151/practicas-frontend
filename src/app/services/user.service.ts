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

  getSuggestions(query: string):Observable<UserResponse[]>{
    return this.httpClient.get<UserResponse[]>(`${baserUrl}/user/share?query=${query}`);
  }

  changeStatus(dni:string):Observable<any>{
    return this.httpClient.put<any>(`${baserUrl}/user/${dni}`,'');
  }
  
  public findUserSAsingmentsService(query:String):Observable<UserResponse[]>{
    return this.httpClient.get<UserResponse[]>(`${baserUrl}/user/user/assign?query=${query}`)
  }
}
