import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicioResponse } from 'src/app/models/servicios';
import { LaborRegimeService } from 'src/app/services/labor-regime.service';
import { SnackbarnotifierService } from 'src/app/services/notifier/snackbarnotifier.service';
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
    private _worckcondition: WorkConditionService,
    private errorAlert:SnackbarnotifierService) { }
  typeBusqueda: filterConstant[] = [
    { value: 'service', viewValue: 'SERVICIO' },
    { value: 'laborRegime', viewValue: 'REGIMEN LABORAL' },
    { value: 'workCondition', viewValue: 'CONDICIÓN LABORAL' },
  ];

  public dateAuxUpdate: any = {}
  title: string = '';
  codeoriginal:string=''

  dateUpdate: any = {
    name: '',
    code: '',
    description: ''

  };


  ngOnInit() {
    if (this.data) {
      this.actualData = this.data;
      this.dateAuxUpdate = this.data
      this.codeoriginal = this.data.code

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
    let option = this.option
    console.log(option);
    const code = this.codeoriginal;
    console.log(code);
    const data = this.dateUpdate;    
    console.log(data);
    switch (option) {
      case 'service':
        this._serviceService.updateService(code,data).subscribe({
          error:(error)=>{
            this.errorAlert.showNotification(error.error.message,'ok','error');},
          complete:()=>{
            this.errorAlert.showNotification("ACTUALIZACIÓN REALIZADA",'ok','success');
            this.actualizacionFinalizada.emit();
          }
        })
        break;
      case 'laborRegime':
        this._laborRegime.updateLaborRegime(code,data).subscribe({
          error:(error)=>{
            this.errorAlert.showNotification(error.error.message,'ok','error');},
          complete:()=>{
            this.errorAlert.showNotification("ACTUALIZACIÓN REALIZADA",'ok','success');
            this.actualizacionFinalizada.emit();
          }
        })
        break;

      case 'workCondition':
        this._worckcondition.updateWorkCondition(code,data).subscribe({
          error:(error)=>{
            this.errorAlert.showNotification(error.error.message,'ok','error');},
          complete:()=>{
            this.errorAlert.showNotification("ACTUALIZACIÓN REALIZADA",'ok','success');
            this.actualizacionFinalizada.emit();
          }
        })
        break;

    }
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
