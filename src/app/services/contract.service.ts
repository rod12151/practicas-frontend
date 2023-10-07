import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contratoRequest } from '../models/contrato';
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
}
