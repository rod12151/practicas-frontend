import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicioResponse } from 'src/app/models/servicios';
import { DataServiceDataService } from 'src/app/services/data/data-service-data.service';

@Component({
  selector: 'app-view-detalle-service',
  templateUrl: './view-detalle-service.component.html',
  styleUrls: ['./view-detalle-service.component.css']
})
export class ViewDetalleServiceComponent  implements OnDestroy,OnInit{
data?:ServicioResponse;
dataServicio$: Subscription;
ngOnInit(): void {
  this.probar();
}

constructor(private datoServicio:DataServiceDataService,
  private roter:Router)
  {
  this.dataServicio$= this.datoServicio.getData().subscribe({
    next:data=>{
      console.log(data)
      this.data=data
      console.log("......................")
      console.log(this.data)
    },
    error:e=>{
      console.log("error al mostrar datos")
      console.log(e)
    }
  })
  

}
probar(){
  if(this.data==undefined){
    this.roter.navigate(['admin/Services'])
  }
}
volver(){
  this.roter.navigate(['admin/Services'])
}
ngOnDestroy(): void {
  this.dataServicio$?.unsubscribe();
}
  
}
