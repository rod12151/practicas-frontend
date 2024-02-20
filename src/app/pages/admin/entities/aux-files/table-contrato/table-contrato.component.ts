import { Component, Input } from '@angular/core';
import { contratoResponse } from 'src/app/models/contrato';


@Component({
  selector: 'app-table-contrato',
  templateUrl: './table-contrato.component.html',
  styleUrls: ['./table-contrato.component.css']
})
export class TableContratoComponent {
  
  @Input() contratos:contratoResponse[]=[];
  @Input() tableId:string='';

  
 
   
   

}
