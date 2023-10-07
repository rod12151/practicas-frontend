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
  //Methods
  /*public AddUser(user:any){
    return this.httpClient.post(`${baserUrl}/user/create`,user)

  }*/
  findAllUsers():Observable<UserResponse[]>{
    
    return this.httpClient.get<UserResponse[]>(`${baserUrl}/user`);
    
  }
  createUser(userRequest:UserRequest):Observable<Object>{
    return this.httpClient.post(`${baserUrl}/user/create`,userRequest);
  }

  /*findAllServicios():Observable<ServicioResponse[]>{
    return this.httpClient.get<ServicioResponse[]>(`${baserUrl}/service`)
  }*/

  getSuggestions(query: string):Observable<UserResponse[]>{
    return this.httpClient.get<UserResponse[]>(`${baserUrl}/user/share?query=${query}`)
  }

}
