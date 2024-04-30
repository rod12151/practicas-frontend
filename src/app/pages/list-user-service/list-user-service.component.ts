import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { AssignmetUserServiceService } from 'src/app/services/assignmet-user-service.service';
import { LaborRegimeService } from 'src/app/services/labor-regime.service';
import { SnackbarnotifierService } from 'src/app/services/notifier/snackbarnotifier.service';
import { ServicesService } from 'src/app/services/services.service';
import { WorkConditionService } from 'src/app/services/work-condition.service';

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

  selectedValue1: string = '';
  selectedValue2: string = '';
  mostrarValueselect: string = '';
  abrir: boolean = false;

  constructor(
    private _asigUser: AssignmetUserServiceService,
    private _workCondition: WorkConditionService,
    private _laborRegime: LaborRegimeService,
    private _service: ServicesService,
    private alert: SnackbarnotifierService
  ) {

  }
  response: any = '';
  responseBusqueda: any = '';
  typeBusqueda: filterConstant[] = [
    { value: 'filterService', viewValue: 'Servicio' },
    { value: 'filterLaborRegime', viewValue: 'Regimen Laborar' },
    { value: 'filterWorkCondition', viewValue: 'Condicion Laboral' },
  ];
  @ViewChild('selectedMenu') selectMenu!: MatSelect;

  buscarvalor() {
    for (let item of this.typeBusqueda) {
      if (item.value === this.selectedValue1) {
        this.responseBusqueda = []
        this.mostrarValueselect = item.viewValue;
        this.selectedValue2 = '';

      }
    }
  }

  abrirMenu() {

    this.selectMenu.open();
  }

  inputBuscarPorCondicion = new FormControl('')

  buscarPorcondicion() {
    this.abrir=true
    this.response = [];
    let opcion = this.mostrarValueselect;
    let search = this.inputBuscarPorCondicion.value || '';
    switch (opcion) {
      case 'Servicio':
        this.responseBusqueda = [];
        this._service.listServiceNameContains(search).subscribe({
          next: (data) => {
            if (data.length != 0) {
              this.responseBusqueda = data;

            } else {
              this.responseBusqueda = []

            }
          },
          error: (e) => this.alert.showNotification(e.error.message, 'ok', 'error')
        })
        this.abrirMenu()
        break;

      case 'Regimen Laborar':
        this.responseBusqueda = [];
        this._laborRegime.getLaborRegimeByname(search).subscribe({
          next: (data) => {
            if (data.length != 0) {
              this.responseBusqueda = data;

            } else {
              this.responseBusqueda = []

            }
          },
          error: (e) => this.alert.showNotification(e.error.message, 'ok', 'error')
        })
        this.abrirMenu()
        break;
      case 'Condicion Laboral':
        this.responseBusqueda = [];
        this._workCondition.getWorkByname(search).subscribe({
          next: (data) => {
            if (data.length != 0) {
              this.responseBusqueda = data;

            } else {
              this.responseBusqueda = []

            }
          },
          error: (e) => this.alert.showNotification(e.error.message, 'ok', 'error')
        })
        this.abrirMenu()
        break

    }

  }




  searchServiceInput = new FormControl('');




  listarUsuarios() {
    if (this.selectedValue1 != '') {
      const option = this.selectedValue1;
      const filter = this.selectedValue2;
      this._asigUser.listWhitFilter(option, filter).subscribe({
        next: (data) => {
          this.response = data
          if (this.response.length==0) {
            this.alert.showNotification('no hay datos que mostrar','ok','alert')
            
          }
        },
        error: (e) => { this.alert.showNotification(e.error.message, 'ok', 'error') }

      });
    } else {
      this.alert.showNotification('elija una opcion para filtrar', 'ok', 'alert')
    }

  }


}
