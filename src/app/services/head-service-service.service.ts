import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioResponse } from '../models/servicios';
import baserUrl from './helper';
import { HeadserviceRequest, HeadserviceResponse, headserviceRequest } from '../models/headService';

@Injectable({
  providedIn: 'root'
})
export class HeadServiceServiceService {

  constructor(private http:HttpClient) { }

  public listHeadService(query:string):Observable<HeadserviceResponse>{
    return this.http.get<HeadserviceResponse>(`${baserUrl}/boss/find/${query}`)

  }

  public deleteHeadService(code:string,dni:string):Observable<any>{
    return this.http.put<any>(`${baserUrl}/boss/delete/${code}/${dni}`,'');
  }

  public saveHeadService(request:headserviceRequest):Observable<object>{
    return this.http.post(`${baserUrl}/boss/create`,request);
  }
  public getJefeService(code:string):Observable<HeadserviceResponse[]>{
    return this.http.get<HeadserviceResponse[]>(`${baserUrl}/boss/find/${code}/true`)

  }
}
