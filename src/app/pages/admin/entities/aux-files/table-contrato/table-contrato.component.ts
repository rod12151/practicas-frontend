import { Component, Input } from '@angular/core';
import { contratoResponse } from 'src/app/models/contrato';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContractService } from 'src/app/services/contract.service';
import { SnackbarnotifierService } from 'src/app/services/notifier/snackbarnotifier.service';


@Component({
  selector: 'app-table-contrato',
  templateUrl: './table-contrato.component.html',
  styleUrls: ['./table-contrato.component.css']
})
export class TableContratoComponent {
  constructor(private _contractoService:ContractService,
              private notificacion:SnackbarnotifierService,
              private _authService:AuthService){}
  
  @Input() contratos:contratoResponse[]=[];
  @Input() tableId:string='';

  terminarcontrato(idContrato:any){
    this._contractoService.terminateContract(idContrato).subscribe({
      next:(data:any)=>{
        console.log(data)
        if(data.status){
          this.notificacion.showNotification(data.message,"ok","success");
        
        }else{
          this.notificacion.showNotification(data.message,"ok","alert");
      
        }
          
      },
      error:(e)=>{
        this.notificacion.showNotification(e.else.message,"ok","success");
      
      }
    })
  }
 
   
   

}
