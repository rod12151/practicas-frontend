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
    
    private _contratoService: ContractService,
    
    private notifierService: SnackbarnotifierService
  ) { }

  ngOnInit() {

  }

 

  public errorInput = '';
  public contratos: contratoResponse[] = [];
  public contratosReLa: contratoResponse[] = [];
  public contratosCoLa: contratoResponse[] = [];
  //busqueda por dni
  public dniInput = new FormControl(

    '',
    [Validators.required,
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

}
