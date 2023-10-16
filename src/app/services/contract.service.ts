import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contratoRequest, contratoResponse } from '../models/contrato';
import { Observable } from 'rxjs';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http:HttpClient) { }


  public createContrato(contratoRequest:contratoRequest):Observable<Object>{
    return this.http.post(`${baserUrl}/contract/create`,contratoRequest);
  }

  public findByDniUser(dni:string):Observable<contratoResponse[]>{
    return this.http.get<contratoResponse[]>(`${baserUrl}/contract/filter/${dni}`);

  }

  public findByLaborRegime(code:string):Observable<contratoResponse[]>{
    return this.http.get<contratoResponse[]>(`${baserUrl}/contract/filter/regime?code=${code}`);
  }
  
  public findByworkCondition(code:string):Observable<contratoResponse[]>{
    return this.http.get<contratoResponse[]>(`${baserUrl}/contract/filter/condition?code=${code}`);
  }

  public findByStartDateAfter(date:string):Observable<contratoResponse[]>{
    return this.http.get<contratoResponse[]>(`${baserUrl}/contract/filter/after?date=${date}`);
  }
  public findByFinishDateBefore(date:string):Observable<contratoResponse[]>{
    return this.http.get<contratoResponse[]>(`${baserUrl}/contract/filter/before?date=${date}`);
  }
  public findBetwenStartDateAndFinishDate(start:string,finish:string):Observable<contratoResponse[]>{
    return this.http.get<contratoResponse[]>(`${baserUrl}/contract/filter/between?startDate=${start}&finishDate=${finish}`);
  }
}
