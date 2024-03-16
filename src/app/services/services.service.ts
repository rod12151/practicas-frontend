import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Observable } from 'rxjs';
import { ServicioRequest, ServicioResponse } from '../models/servicios';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http:HttpClient) { }

  public createService(serviceRequest:ServicioRequest):Observable<Object>{
    return this.http.post(`${baserUrl}/service/create`,serviceRequest);
  }

  public listService(){
    return this.http.get(`${baserUrl}/service`);
  }
  public listServiceByStatus(query:String){
    return this.http.get(`${baserUrl}/service/services?query=${query}`)
  }
  public listServiceNameContains(query:String):Observable<ServicioResponse[]>{
    return this.http.get<ServicioResponse[]>(`${baserUrl}/service/services/name?name=${query}`)
  }
  


}
