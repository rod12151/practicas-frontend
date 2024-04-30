import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from '../helper';
import { generoGrafic } from 'src/app/models/graficsModels';

@Injectable({
  providedIn: 'root'
})
export class GraficGeneroService {

  constructor(private httpClient:HttpClient) { }

  public getDataGenderGeneral():Observable<any[]>{
    return this.httpClient.get<any[]>(`${baserUrl}/data/gender`);

  }
  public getDataGenderForOneService(service:string):Observable<generoGrafic>{
    return this.httpClient.get<generoGrafic>(`${baserUrl}/data/gender/service?code=${service}`);

  }
  public getDataGenderAllService():Observable<any[]>{
    return this.httpClient.get<any[]>(`${baserUrl}/data/gender/all`);

  }
}
