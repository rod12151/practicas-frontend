
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, AbstractControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { Contrato, contratoRequest } from 'src/app/models/contrato';
import { UserResponse } from 'src/app/models/usuario';
import { WorkConditionResponse } from 'src/app/models/workCondition';
import { LaborRegimeService } from 'src/app/services/labor-regime.service';
import { UserService } from 'src/app/services/user.service';
import { WorkConditionService } from 'src/app/services/work-condition.service';
import { ContractService } from 'src/app/services/contract.service';
import { Router } from '@angular/router';
import { SnackbarnotifierService } from 'src/app/services/notifier/snackbarnotifier.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {


  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private _workService: WorkConditionService,
    private _laborRegimeService: LaborRegimeService,
    private _contratoService:ContractService,
    private router:Router,
    private notificacion:SnackbarnotifierService
  ) { }

  ngOnInit() {

  }
  
  contracto = new Contrato('', '', '', '', 0, '', '')
  //funcion para navegar entre los steps
  currentStepIndex = 10;
  navegarAStep(stepIndex: number) {
    if (stepIndex !== this.currentStepIndex) {
      this.currentStepIndex = stepIndex;
    }
  }




  //usuario
  public searchUserInput = new FormControl('');

  public usuarios: UserResponse[] = [];
  public UserSelect: any = null;
  public nameUser:string ="";
  uSelected = false;

  searchUsuario() {
    const value: string = this.searchUserInput.value || '';

    this.userService.getSuggestions(value)
      .subscribe(data => {
        this.usuarios = data;

      });
    
  }
  usuarioSeleccionado(resultado: any) {

    this.UserSelect = resultado;
    this.contracto.dniUser = this.UserSelect.dni;
    
    this.uSelected = true;
    this.nameUser=this.UserSelect.name + " "+ this.UserSelect.lastName;
    

  }
  //condicion Laboral
  public workconditionInput = new FormControl('');

  public workCondition: WorkConditionResponse[] = [];
  public workConditionSelect: any = null;
  public nameWork:string ="";
  wSelected = false;

  searchworkCondition() {
    const value: string = this.workconditionInput.value || '';

    this._workService.getWorkByname(value)
      .subscribe(data => {
        this.workCondition = data;
      });
    console.log(value);
  }
  workConditionSeleccionado(resultado: any) {

    this.workConditionSelect = resultado;
    this.contracto.codeWorkCondition = this.workConditionSelect.code;
    this.nameWork=resultado.name
  
    this.wSelected = true;

  }
  //regimen Laboral
  public laborRegimeInput = new FormControl('');

  public laborRegime: WorkConditionResponse[] = [];
  public laborRegimeSelect: any = null;
  public nameRegimen:string="";
  lRSelected = false;

  searchLaborRegime() {
    const value: string = this.laborRegimeInput.value || '';

    this._laborRegimeService.getLaborRegimeByname(value)
      .subscribe(data => {
        this.laborRegime = data;
      });
    console.log(value);
  }
  laborRegimeSeleccionado(resultado: any) {

    this.laborRegimeSelect = resultado;
    this.contracto.codeLaborRegime = this.laborRegimeSelect.code;
    this.nameRegimen=resultado.name;
    this.lRSelected = true;

  }

  //fecha

  fechaInicio = new FormControl([Validators.required, Validators.nullValidator]);
  FInicio: string = '';
  fechaFinal = new FormControl([Validators.required, Validators.nullValidator]);
  FFinal: string = '';
  puesto: string = '';
  salario: number = 0;
  


  dateI() {
    if (this.fechaInicio.value instanceof Date) {

      const diaInicio = (this.fechaInicio.value?.getDate())?.toString().padStart(2, '0');
      const mesInicio = ((this.fechaInicio.value?.getMonth()) + 1)?.toString().padStart(2, '0');
      const anioInicio = this.fechaInicio.value?.getFullYear();

      this.FInicio = (`${anioInicio}-${mesInicio}-${diaInicio}`);
      this.contracto.startDate = this.FInicio;
      console.log(this.contracto.startDate);
    }

  }
  dateF() {
    if (this.fechaFinal.value instanceof Date) {
      const diaFinal = (this.fechaFinal.value?.getDate())?.toString().padStart(2, '0');
      const mesFinal = ((this.fechaFinal.value?.getMonth()) + 1)?.toString().padStart(2, '0');
      const anioFinal = this.fechaFinal.value?.getFullYear();

      this.FFinal = (`${anioFinal}-${mesFinal}-${diaFinal}`);
      this.contracto.finishDate = this.FFinal;
      console.log(this.contracto.finishDate);
    }
  }




  //salario
  public formSalario = new FormControl(0, [
    Validators.required,
    Validators.pattern(/^\d+(\.\d{1,2})?$/),
    Validators.nullValidator
  ]);
  asigSalario() {
    if (this.formSalario.valid) {
      this.salario = this.formSalario.value || 0;
      this.contracto.salary = this.salario;
      console.log(this.contracto.salary);
    }
  }
  //puesto
  asigPpuesto() {
    if (this.formPuesto.valid) {
      this.puesto = this.formPuesto.value || '';
      this.contracto.position = this.puesto
      console.log(this.contracto.position);
    }

  }
  public formPuesto = new FormControl('', [
    Validators.required,
    Validators.nullValidator
  ]
  );
  sonTodasEntradasValidas() {
    return (
      this.fechaInicio.valid &&
      this.fechaFinal.valid &&
      this.formPuesto.valid &&
      this.formSalario.valid
    );
  }

  
  guardarContrato() {
    
    const data = this.contracto.toContractoRequest();

    this._contratoService.createContrato(data).subscribe({
      next:(data2)=>{
        const mensaje:string=" Contrato del usuario: "+ this.nameUser+ " creado con exito";
        this.notificacion.showNotification(mensaje,"ok","success" )
        
      },error:(errorData)=>{
        this.notificacion.showNotification(errorData.error.message,"ok","error")
      },complete:()=>{
        this.router.navigate(['/admin/viewContract'])
      }
    })



  }
  

  
}








