import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { contractallGrafic, generoGrafic } from 'src/app/models/graficsModels';
import { HeadserviceResponse } from 'src/app/models/headService';
import { ServicioResponse } from 'src/app/models/servicios';
import { DataServiceDataService } from 'src/app/services/data/data-service-data.service';
import { GraficContractService } from 'src/app/services/grafic/grafic-contract.service';
import { GraficGeneroService } from 'src/app/services/grafic/grafic-genero.service';
import { HeadServiceServiceService } from 'src/app/services/head-service-service.service';

@Component({
  selector: 'app-view-detalle-service',
  templateUrl: './view-detalle-service.component.html',
  styleUrls: ['./view-detalle-service.component.css']
})
export class ViewDetalleServiceComponent implements OnDestroy, OnInit {



  dataGeneroGrafic?: generoGrafic;
  dataRegimeGrafic?:contractallGrafic;
  dataConditionGrafic?:contractallGrafic;

  dataServicio?: ServicioResponse;

  verDatos: boolean = false;
  existJefe: boolean = false;
  grafic1: boolean = false;
  grafic2: boolean = false;
  grafic3: boolean = false;

  dataJefeServicio?: HeadserviceResponse;
  dataServicio$: Subscription;
  ngOnInit(): void {
    this.existData();
  }



  constructor(private datoServicio: DataServiceDataService,
    private jefeServicio: HeadServiceServiceService,
    private graficGender: GraficGeneroService,
    private graficContract:GraficContractService,
    private roter: Router) {

    this.dataServicio$ = this.datoServicio.getData().subscribe({
      next: data => {

        this.dataServicio = data

      },
      error: e => {
        console.log("error al mostrar datos")
        console.log(e)
      }


    })



  }
  
  graficExist():boolean{
    if(this.grafic1&&this.grafic2&&this.grafic3){
      return true
    }
    return false
  }
  datosGenero(code: string) {
    console.log("code en datos genero" + code)

    this.graficGender.getDataGenderForOneService(code).subscribe({
      next: data => {
        this.dataGeneroGrafic = data;
        this.grafic1=true
        console.log(data)
      },
      error: e => {
        console.log(e)
      }
    })



  }
  datosRegime(code:string){
    this.graficContract.getcontractForRegimeAndService(code).subscribe({
      next: data => {
        this.dataRegimeGrafic = data;
        this.grafic2=true
        console.log(data)
      },
      error: e => {
        console.log(e)
      }
    })

  }
  datosCondition(code:string){
    this.graficContract.getcontractForConditionAndService(code).subscribe({
      next: data => {
        this.dataConditionGrafic = data;
        this.grafic3=true
        console.log(data)
      },
      error: e => {
        console.log(e)
      }
    })

  }
  viewDatos() {
    const code = this.dataServicio?.code || '';
    this.datosJefeServicio();
    this.datosGenero(code);
    this.datosRegime(code);
    this.datosCondition(code);    
    this.verDatos = true
    

  }


  datosJefeServicio() {
    const code: string = this.dataServicio?.code || ''
    this.jefeServicio.getJefeService(code).subscribe({
      next: data => {
        if (data.length != 0) {
          this.dataJefeServicio = data[0];
          this.existJefe = true;
        }
      },
      error: e => {
        console.log(e)

      }
    })
  }

  existData() {
    if (this.dataServicio == undefined) {
      this.roter.navigate(['admin/Services'])
    }
  }
  volver() {
    this.roter.navigate(['admin/Services'])
  }
  ngOnDestroy(): void {
    this.dataServicio$?.unsubscribe();
  }

}
