import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicioResponse } from 'src/app/models/servicios';
import { LaborRegimeService } from 'src/app/services/labor-regime.service';
import { ServicesService } from 'src/app/services/services.service';
import { WorkConditionService } from 'src/app/services/work-condition.service';

interface filterConstant {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-serv-reg-con',
  templateUrl: './edit-serv-reg-con.component.html',
  styleUrls: ['./edit-serv-reg-con.component.css']
})
export class EditServRegConComponent implements OnInit {
  @Input() data?: any;
  @Input() option?: string
  @Output() actualizacionFinalizada = new EventEmitter<void>();


  constructor(
    private _serviceService: ServicesService,
    private _laborRegime: LaborRegimeService,
    private _worckcondition: WorkConditionService) { }
    typeBusqueda: filterConstant[] = [
      { value: 'service', viewValue: 'SERVICIO' },
      { value: 'laborRegime', viewValue: 'REGIMEN LABORAL' },
      { value: 'workCondition', viewValue: 'CONDICIÓN LABORAL' },
    ];
    
  public dateAuxUpdate: any = {}
  title:string='';
  dateUpdate: any = {
    name: '',
    code: '',
    description: ''

  };


  ngOnInit() {
    if (this.data) {
      this.actualData = this.data;
      this.dateAuxUpdate = this.data
      
    }
    this.buscarvalor()
    

  }
  actualData: any | undefined;
  asigDate() {
    this.dateUpdate.name = this.dateAuxUpdate.name;
    this.dateUpdate.code = this.dateAuxUpdate.code;
    this.dateUpdate.description = this.dateAuxUpdate.description;


  }

  GuardarDato() {
    this.asigDate()
    const dni = this.dateUpdate.dni || '';
    const user = this.dateUpdate;
    /*
    this._userService.actualizarUsuario(dni,user).subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:(e)=>{
        console.error(e.error.message)
      },
      complete:()=>{
        this.actualizacionFinalizada.emit();
      }
    })  
  */
  }
  cancelar() {
    this.actualizacionFinalizada.emit();
  }

  buscarvalor() {
    for (let item of this.typeBusqueda) {
      if (item.value === this.option) {
        this.title = item.viewValue;

      }
    }
  }


}
