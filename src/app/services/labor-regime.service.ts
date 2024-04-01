import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { LaborRegimeRequest, LaborRegimeResponse } from '../models/laborRegime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaborRegimeService {
  constructor(private http:HttpClient) { }

public listWorkConditions(){
  return this.http.get(`${baserUrl}/laborRegime`);

}
public createLaborRegime(laborRegimeRequest:LaborRegimeRequest):Observable<Object>{
  return this.http.post(`${baserUrl}/laborRegime/create`,laborRegimeRequest);
}

getLaborRegimeByname(query: string):Observable<LaborRegimeResponse[]>{
  return this.http.get<LaborRegimeResponse[]>(`${baserUrl}/laborRegime/share?query=${query}`)
}
public updateLaborRegime(code:string,laborRegime:LaborRegimeRequest):Observable<LaborRegimeResponse>{
  return this.http.put<LaborRegimeResponse>(`${baserUrl}/laborRegime/update/${code}`,laborRegime);
}

}
