import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from './helper';
import { WorkConditionRequest, WorkConditionResponse } from '../models/workCondition';

@Injectable({
  providedIn: 'root'
})
export class WorkConditionService {

  constructor(private http:HttpClient) { }

  public listWorkConditions(){
    return this.http.get(`${baserUrl}/workCondition`);

  }
  public createWorkCondition(workConditionRequest:WorkConditionRequest):Observable<Object>{
    return this.http.post(`${baserUrl}/workCondition/create`,workConditionRequest);
  }

  getWorkByname(query: string):Observable<WorkConditionResponse[]>{
    return this.http.get<WorkConditionResponse[]>(`${baserUrl}/workCondition/share?query=${query}`)
  }
  public updateWorkCondition(code:string,workCondition:WorkConditionRequest):Observable<WorkConditionResponse>{
    return this.http.put<WorkConditionResponse>(`${baserUrl}/workCondition/update/${code}`,workCondition);
  }
}
