import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { asigUserServiceRequest, asigUserServiceResponse } from '../models/asigUserService';
import { Observable } from 'rxjs';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AssignmetUserServiceService {

  constructor(private httpClient:HttpClient) { }

  public saveUsuarioService(request:asigUserServiceRequest):Observable<object>{
    return this.httpClient.post(`${baserUrl}/assignment/create`,request)
  }
 
  public listWhitFilter(constant:string,filter:string):Observable<object>{
    return this.httpClient.get<asigUserServiceResponse>(`${baserUrl}/assignment/filter?option=${constant}&filter=${filter}`);
  }
}
