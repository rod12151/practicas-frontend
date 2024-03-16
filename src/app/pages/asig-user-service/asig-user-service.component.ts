import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AsigUserServiceRequest } from 'src/app/models/asigUserService';
import { ServicioResponse } from 'src/app/models/servicios';
import { AssignmetUserServiceService } from 'src/app/services/assignmet-user-service.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SnackbarnotifierService } from 'src/app/services/notifier/snackbarnotifier.service';
import { ServicesService } from 'src/app/services/services.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-asig-user-service',
  templateUrl: './asig-user-service.component.html',
  styleUrls: ['./asig-user-service.component.css']
})
export class AsigUserServiceComponent {
  constructor(
    private _authService: AuthService,
    private _serviceServicio: ServicesService,
    private _userServico: UserService,
    private _assignmentUserService:AssignmetUserServiceService,
    private snackAlert: SnackbarnotifierService,
    private router:Router

  ) {
  }
  optenerDniBos() {
    if (this._authService.isLoggedIn()) {
      return this._authService.getUser().dni
    } else {
      return '';
    }
  }
  dniBoos = this.optenerDniBos();

  public codeService: string = '';
  public nameService: string = '';
  public dniUser: string = '';
  public nameUser: string = '';
  public startDate: string = '';
  public finishDate: string = '';

  //datos
  public listServicio: any = [];
  public listUsuarios: any = [];
  //selecciones
  public selectServicio: any = '';
  public selectUsuario: any = '';
  FInicio: string = '';
  FFinal: string = '';

  //boleans
  sSelect: boolean = false;
  uSelect: boolean = false;
  public fechaSelectI: boolean = false;
  public fechaSelectS: boolean = false;

  asigService = new AsigUserServiceRequest(this.dniBoos, '', '', '', '');

  //formulio
  searchServiceInput = new FormControl('');
  searchUserInput = new FormControl('');
  fechaInicio = new FormControl([Validators.required, Validators.nullValidator]);
  fechaFinal = new FormControl([Validators.required, Validators.nullValidator]);



  optenerServicios() {
    if (this.searchServiceInput.valid) {
      this.sSelect = false;
      const value: string = this.searchServiceInput.value || '';
      this._serviceServicio.listServiceNameContains(value).subscribe({
        next: (data) => {
          if (data.length != 0) {
            this.listServicio = data

          }
          else {
            this.listServicio = []
            this.snackAlert.showNotification('no hay servicios con el nombre ingresado', 'ok', 'alert');
          }

        },
        error: (e) => this.snackAlert.showNotification(e.error.message, 'ok', 'error'),

      })
    } else {
      this.snackAlert.showNotification('Ingrese datos validos', 'ok', 'error')
    }



  }
  serviceSeleccionado(res: any) {
    this.codeService = res.code;
    this.nameService = res.name;
    this.asigService.codeService = this.codeService;
    console.log(this.codeService);
    this.sSelect = true;
  }

  optenerUsuario() {
    if (this.searchUserInput.valid) {
      this.uSelect = false;
      const value: string = this.searchUserInput.value || '';
      this._userServico.findUserSAsingmentsService(value).subscribe({
        next: (data) => {
          if (data.length != 0) {
            this.listUsuarios = data
            console.log(data)
          }
          else {
            this.listUsuarios = []
            this.snackAlert.showNotification('no hay usuarios con el nombre ingresado', 'ok', 'alert');
          }
        },
        error: (e) => this.snackAlert.showNotification(e.error.message, 'ok', 'error')

      })
    } else {
      this.snackAlert.showNotification('Ingrese datos validos', 'ok', 'error')
    }
  }
  usuarioSeleccionado(res: any) {
    this.dniUser = res.dni;
    this.nameUser = res.fullName;
    this.asigService.dniUser = this.dniUser;
    console.log(this.dniUser);
    this.uSelect = true;
  }
  dateI() {
    if (this.fechaInicio.value instanceof Date) {
      const diaInicio = (this.fechaInicio.value?.getDate())?.toString().padStart(2, '0');
      const mesInicio = ((this.fechaInicio.value?.getMonth()) + 1)?.toString().padStart(2, '0');
      const anioInicio = this.fechaInicio.value?.getFullYear();
      this.FInicio=(`${anioInicio}-${mesInicio}-${diaInicio}`);
      this.asigService.startDate=this.FInicio;
      this.fechaSelectI=true;
      console.log(this.FInicio)


    }
  }
  dateF() {
    if (this.fechaFinal.value instanceof Date) {
      const diaFinal = (this.fechaFinal.value?.getDate())?.toString().padStart(2, '0');
      const mesFinal = ((this.fechaFinal.value?.getMonth()) + 1)?.toString().padStart(2, '0');
      const anioFinal = this.fechaFinal.value?.getFullYear();
      this.FFinal=(`${anioFinal}-${mesFinal}-${diaFinal}`);
      this.asigService.finishDate=this.FFinal;
      this.fechaSelectS=true;
      console.log(this.FFinal)


    }
  }

  fechasValidas(){
    return (this.fechaSelectI && this.fechaSelectS)
  }
  asignarUsuarioServicio(){
  
      const request = this.asigService.toAsigUserServiceRequest();
      console.log(request)
      this._assignmentUserService.saveUsuarioService(request).subscribe({
        next:()=>{this.snackAlert.showNotification('usuario asignado correctamente','exíto','success')
      },
      error:(error)=>{this.snackAlert.showNotification(error.error.message,'error','error')
    },
    complete:()=>{
      /*this.router.navigate(['/admin/addUserService'],{ replaceUrl: true })*/
      console.log()
    }
      })
  
  
    
  }

}
