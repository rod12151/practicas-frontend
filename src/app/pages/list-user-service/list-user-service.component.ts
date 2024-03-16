import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { asigUserServiceResponse } from 'src/app/models/asigUserService';
import { AssignmetUserServiceService } from 'src/app/services/assignmet-user-service.service';
import { SnackbarnotifierService } from 'src/app/services/notifier/snackbarnotifier.service';

interface filterConstant {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-list-user-service',
  templateUrl: './list-user-service.component.html',
  styleUrls: ['./list-user-service.component.css']
})
export class ListUserServiceComponent {
  selectedValue: string = '';
  mostrarValueselect:string='';
  constructor(
    private _asigUser: AssignmetUserServiceService,
    private alert:SnackbarnotifierService
    ) {

  }
   response:any='';
   typeBusqueda: filterConstant[] = [
    { value: 'filterService', viewValue: 'Servicio' },
    { value: 'filterLaborRegime', viewValue: 'Regimen Laborar' },
    { value: 'filterWorkCondition', viewValue: 'Condicion Laboral' },
  ];
  buscarvalor(){
    for(let item of this.typeBusqueda){
      if(item.value===this.selectedValue){
        this.mostrarValueselect=item.viewValue;
      }

    }
  } 

  searchServiceInput = new FormControl('');

   

  datas() {
    console.log(this.selectedValue)

  }
  listarUsuarios() {
    if (this.selectedValue != '') {
      const option = this.selectedValue;
      const filter = this.searchServiceInput.value || '';
      this._asigUser.listWhitFilter(option, filter).subscribe({
        next: (data) => { this.response=data },
        error: () => { this.alert.showNotification("algo salio mal",'ok','error') }

      });
    }else{
      this.alert.showNotification('elija una opcion para filtrar','ok','alert')
    }

  }

}
