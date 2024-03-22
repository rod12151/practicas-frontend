import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateAStringService {

  constructor() { }

  dateI(date:any) {
    if (date instanceof Date) {

      const diaInicio = (date.getDate())?.toString().padStart(2, '0');
      const mesInicio = ((date.getMonth()) + 1)?.toString().padStart(2, '0');
      const anioInicio = date.getFullYear();

      return (`${anioInicio}-${mesInicio}-${diaInicio}`);
      
      
    }else{
      return ''
      
    }}
    
}
