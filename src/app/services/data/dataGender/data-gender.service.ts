import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { generoGrafic } from 'src/app/models/graficsModels';

@Injectable({
  providedIn: 'root'
})
export class DataGenderService {
  dataGraficGenderForService?:generoGrafic;
  myBehaviorSubjectGender = new BehaviorSubject<any>(this.dataGraficGenderForService)

  constructor() { }
  setData(response:generoGrafic){
    this.myBehaviorSubjectGender.next(response);
  }
  getData(){
    return this.myBehaviorSubjectGender.asObservable();
  }
}
