import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeadserviceRequest } from 'src/app/models/headService';
import { HeadServiceServiceService } from 'src/app/services/head-service-service.service';
import { ServicesService } from 'src/app/services/services.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-jefes',
  templateUrl: './add-jefes.component.html',
  styleUrls: ['./add-jefes.component.css']
})
export class AddJefesComponent {
  constructor(private _serviceService: ServicesService,
    private _userService: UserService,
    private _headService:HeadServiceServiceService,
    private router:Router,
    private fb: FormBuilder) { }
  listServicio: any = [];
  listUser: any = [];

  private dniUser: string = '';
  public nameUser: string = '';
  private codeServicio: string = '';
  public nombreServicio: string = '';
  headService = new HeadserviceRequest('','','','');  
  public uSelect: boolean = false;
  public sSelect: boolean = false;
  public a: boolean = false;
  public b: boolean = false;

  public servicioSelect: any = '';
  public usuarioSelect: any = '';
  ngOnInit(): void {
    this.optenerServicios();
    console.log(this.fechasValidas())
  }
  //servicio
  optenerServicios() {
    return this._serviceService.listServiceByStatus('false').subscribe({
      next: (data) => {
        this.listServicio = (data)
      },
      error: (e) => console.error(e.error),
      complete: () => console.log(this.listServicio)

    })
  }

  serviceSeleccionado(res: any) {
    this.codeServicio = res.code;
    this.nombreServicio=res.name;
    this.headService.codeservice=this.codeServicio;
    console.log(this.codeServicio);
    this.sSelect = true;
  }
  //usuario
  searchUserInput = new FormControl('');
  optenerUsuarios() {
    const value: string = this.searchUserInput.value || '';
    return this._userService.getSuggestions(value).subscribe({
      next: (data) => {
        this.listUser = data
      
      },
      error: (e) => console.error(e.error),
      complete: () => console.log(this.listUser)
    })
  }
  usuarioSeleccionado(res: any) {
    this.dniUser = res.dni;
    this.nameUser=res.fullName;
    this.headService.dniUser=this.dniUser;
    console.log(this.dniUser)
    console.log(this.nameUser)
    this.uSelect = true;

  }
  //fechas
  fechaInicio = new FormControl([Validators.required, Validators.nullValidator]);
  FInicio: string = '';
  fechaFinal = new FormControl([Validators.required, Validators.nullValidator]);
  FFinal: string = '';


  dateI() {
    if (this.fechaInicio.value instanceof Date) {

      const diaInicio = (this.fechaInicio.value?.getDate())?.toString().padStart(2, '0');
      const mesInicio = ((this.fechaInicio.value?.getMonth()) + 1)?.toString().padStart(2, '0');
      const anioInicio = this.fechaInicio.value?.getFullYear();

      this.FInicio = (`${anioInicio}-${mesInicio}-${diaInicio}`);
      this.headService.startDate=this.FInicio;
      this.a=true;
      console.log(this.FInicio);
    }

  }
  dateF() {
    if (this.fechaFinal.value instanceof Date) {
      const diaFinal = (this.fechaFinal.value?.getDate())?.toString().padStart(2, '0');
      const mesFinal = ((this.fechaFinal.value?.getMonth()) + 1)?.toString().padStart(2, '0');
      const anioFinal = this.fechaFinal.value?.getFullYear();

      this.FFinal = (`${anioFinal}-${mesFinal}-${diaFinal}`);
      this.headService.finishDate=this.FFinal;
      this.b=true;
      console.log(this.FFinal);
    }
  }
 fechasValidas(){
  return (this.a&&this.b)
    
  }
 

  //confirm date
  
  
  //Guardar Head]Service
  saveHeadService(){
    const data = this.headService.toHeaderServiceRequest()
    this._headService.saveHeadService(data).subscribe({
      next:(data2)=>{
        console.info(data2,'creado');
      },
      error:(errorData)=>{
        console.log(data.codeService)
        console.error(errorData);
        console.log(data)
      },
      complete:()=>{
        this.router.navigate(['/admin/listJefes'])

      }
    })


  }

}


