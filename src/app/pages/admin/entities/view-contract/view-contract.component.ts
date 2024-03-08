import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';

import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, AbstractControl } from '@angular/forms';
import { contratoResponse } from 'src/app/models/contrato';
import { catchError, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarnotifierService } from 'src/app/services/notifier/snackbarnotifier.service';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.css'],
})
export class ViewContractComponent implements OnInit {
  constructor(
    private router: Router,
    private _contratoService: ContractService,
    private snackBar: MatSnackBar,
    private notifierService: SnackbarnotifierService
  ) { }

  ngOnInit() {

  }

 

  public errorInput = '';
  public contratos: contratoResponse[] = [];
  public contratosReLa: contratoResponse[] = [];
  public contratosCoLa: contratoResponse[] = [];
  public contratosStarDateAfter: contratoResponse[] = [];
  public contratosFinishDateBefore: contratoResponse[] = [];
  public contratosBetwen: contratoResponse[] = [];
  //busqueda por dni
  public dniInput = new FormControl(

    '',
    [Validators.required,
    Validators.nullValidator,
    Validators.maxLength(8),
    Validators.minLength(8)
    ]);

  searchContractByDniUser() {
    if (this.dniInput.value && this.dniInput.valid) {
      ;
      const code: string = this.dniInput.value;
      this._contratoService.findByDniUser(code)
        .pipe(
          catchError(error => {
            return of(null);
          })
        ).subscribe(data => {
          if (data !== null) {

            console.log(data);
            this.contratos = data;
          } else {

            this.contratos = [];
            this.notifierService.showNotification("no existen resultados para el dni ingresado", "ok", "alert");
          }
        });
    } else {
      this.notifierService.showNotification("ingrese un dni valido","ok","error");

      this.notifierService.showNotification('ingrese un dni valido', 'OK', 'error');
    }
  }
  //fin busqueda dni

  //busqueda por regimen laboral
  public regimenLabInput = new FormControl(

    '',
    [Validators.required,
    Validators.nullValidator,
    Validators.maxLength(8),
    Validators.minLength(8)
    ]);
  searchContractByLaborRegime() {
    if (this.regimenLabInput.value && this.regimenLabInput.valid) {
      ;
      const code: string = this.regimenLabInput.value;
      console.log(code);
      this._contratoService.findByLaborRegime(code)
        .pipe(
          catchError(error => {
            return of(null);
          })
        ).subscribe(data => {
          if (data !== null) {

            console.log(data);
            this.contratosReLa = data;
          } else {

            this.contratosReLa = [];
            this.notifierService.showNotification("no existen resultados para el regimen ingresado","ok","alert")
          }
        });
    } else {
      this.notifierService.showNotification("ingrese un codigo valido ","ok","error");
    }
  }
  //fin

  // busqueda por condicion laboral
  public workConditionInput = new FormControl(

    '',
    [Validators.required,
    Validators.nullValidator
    ]);
  searchContractByworkcondition() {
    if (this.workConditionInput.value && this.workConditionInput.valid) {
      ;
      const code: string = this.workConditionInput.value;
      console.log(code);
      this._contratoService.findByworkCondition(code)
        .pipe(
          catchError(error => {
            return of(null);
          })
        ).subscribe(data => {
          if (data !== null) {

            console.log(data);
            this.contratosCoLa = data;
          } else {

            this.contratosCoLa = [];
            this.notifierService.showNotification("no existen resultados para el regimen ingresado","ok","alert")
          }
        });
    } else {
      this.notifierService.showNotification("ingrese un codigo valido ","ok","error");
    }
  }

  //busqueda por fecha

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
