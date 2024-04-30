import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from '../helper';
import { contractallGrafic } from 'src/app/models/graficsModels';

@Injectable({
  providedIn: 'root'
})
export class GraficContractService {

  constructor(
    private httpClient:HttpClient
  ) { }

  public getDataContractAllService():Observable<contractallGrafic>{
    return this.httpClient.get<contractallGrafic>(`${baserUrl}/data/contract/service`);

  }
  public getDataContractAllRegime():Observable<contractallGrafic>{
    return this.httpClient.get<contractallGrafic>(`${baserUrl}/data/contract/regime/all`);

  }
  public getDataContractAllCondicion():Observable<contractallGrafic>{
    return this.httpClient.get<contractallGrafic>(`${baserUrl}/data/contract/condition/all`);

  }

  public getcontractForConditionAndService(code:string):Observable<contractallGrafic>{
    return this.httpClient.get<contractallGrafic>(`${baserUrl}/data/contract/condition?code=${code}`);

  }

  public getcontractForRegimeAndService(code:string):Observable<contractallGrafic>{
    return this.httpClient.get<contractallGrafic>(`${baserUrl}/data/contract/regime?code=${code}`);

  }
}
