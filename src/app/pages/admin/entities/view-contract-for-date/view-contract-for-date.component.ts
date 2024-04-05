import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { contratoResponse } from 'src/app/models/contrato';
import { ContractService } from 'src/app/services/contract.service';
import { SnackbarnotifierService } from 'src/app/services/notifier/snackbarnotifier.service';

@Component({
  selector: 'app-view-contract-for-date',
  templateUrl: './view-contract-for-date.component.html',
  styleUrls: ['./view-contract-for-date.component.css']
})
export class ViewContractForDateComponent {
  constructor(
    
    private _contratoService: ContractService,
    
    private notifierService: SnackbarnotifierService
  ){}

  public contratosStarDateAfter: contratoResponse[] = [];
  public contratosFinishDateBefore: contratoResponse[] = [];
  public contratosBetwen: contratoResponse[] = [];
  public startDate = new FormControl([Validators.required, Validators.nullValidator]);
  convertirFechaString(date: Date) {

    const dia: string = (date.getDate())?.toString().padStart(2, '0');
    const mes: string = ((date.getMonth() + 1)?.toString().padStart(2, '0'));
    const anio: string = (date.getFullYear().toString());
    const fecha: string = (`${anio}-${mes}-${dia}`);

    return fecha
  }
  getContractAfterStarDate() {
    if (this.startDate.value instanceof Date) {
      var fecha = this.convertirFechaString(this.startDate.value);
      this._contratoService.findByStartDateAfter(fecha)
        .pipe(
          catchError(error => {
            console.log(error)
            return of(null);
          })
        ).subscribe(data => {
          if (data !== null) {
            console.log(data);
            this.contratosStarDateAfter = data;
          } else {
            console.log("no hay datos")
            this.contratosStarDateAfter = []

            this.notifierService.showNotification("no hay contratos para la fecha dada","ok","alert")
          }
        });

    }
    else{
      this.notifierService.showNotification("ingrese una fecha","ok","error")
          
    }
  }
  public finishDate = new FormControl([Validators.required, Validators.nullValidator]);

  getContractBeforeFinishDate() {
    if (this.finishDate.value instanceof Date) {
      var fecha = this.convertirFechaString(this.finishDate.value);
      this._contratoService.findByFinishDateBefore(fecha)
        .pipe(
          catchError(error => {
            console.log(error)
            return of(null);
          })
        ).subscribe(data => {
          if (data !== null) {
            console.log(data);
            this.contratosFinishDateBefore = data;
          } else {
            console.log("no hay datos")
            this.contratosFinishDateBefore = []

            this.notifierService.showNotification("no hay contratos para la fecha dada","ok","alert")
          }
        });

    }else{
      this.notifierService.showNotification("ingrese una fecha","ok","error")
          
    }

  }

  getContractBetwen() {
    if (this.startDate.value instanceof Date && this.finishDate.value instanceof Date) {
      var startdate = this.convertirFechaString(this.startDate.value);
      var finishdate = this.convertirFechaString(this.finishDate.value);
      this._contratoService.findBetwenStartDateAndFinishDate(startdate, finishdate)
        .pipe(
          catchError(error => {
            console.log(error);
            return of(null);
          })
        ).subscribe(data => {
          if (data !== null) {
            console.log(data);
            this.contratosBetwen = data;
          } else {
            console.log("no hay datos")
            this.contratosBetwen = []

            this.notifierService.showNotification("no hay contratos para la fecha dada","ok","alert")
          }

        })

    }else{
      this.notifierService.showNotification("ingrese una fecha","ok","error")
      
    }
  }


}
