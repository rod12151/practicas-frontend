import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ServicioResponse } from 'src/app/models/servicios';

@Injectable({
  providedIn: 'root'
})
export class DataServiceDataService {
  servicoIni?:ServicioResponse;
  myBehaviorSubject = new BehaviorSubject<any>(this.servicoIni)  

  constructor() { }

  setData(response:ServicioResponse){
    this.myBehaviorSubject.next(response);
  }
  getData(){
    return this.myBehaviorSubject.asObservable();
  }
 
}
