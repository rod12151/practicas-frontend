import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioResponse } from 'src/app/models/servicios';
import { DataServiceDataService } from 'src/app/services/data/data-service-data.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit{
  service: any=[]
  viewUpdate:boolean=false;
  dataUpdate:any=[]
  dataKey:string='service'

  constructor(private serviceService:ServicesService,
    private servicioData:DataServiceDataService,
    private router:Router
  ){}

  ngOnInit(): void {

    this.serviceService.listService().subscribe({
      next:(data)=>this.service=data,
      error:(e)=>console.error(e),
      complete:()=>console.info('complete')
    }
    )
      
  }
  mostrarComponetUpdate(data:any){
    
  
    this.dataUpdate=data;
    console.log(data)
    console.log(this.dataKey)
    console.log(this.dataUpdate)
    
    this.viewUpdate=true;
    
    
  }
  ocultarComponentUpdate(){
    this.serviceService.listService().subscribe({
      next:(data)=>this.service=data,
      error:(e)=>console.error(e),
      complete:()=>console.info('complete')
    }
    )
    this.viewUpdate=false;
  }

  DetalleService(service:ServicioResponse){
    this.servicioData.setData(service);
    this.router.navigate(['admin/ServiceDetalle'])


  }



}
