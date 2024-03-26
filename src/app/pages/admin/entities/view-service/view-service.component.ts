import { Component, OnInit } from '@angular/core';
import { ServicioResponse } from 'src/app/models/servicios';
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

  constructor(private serviceService:ServicesService){}

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
    this.viewUpdate=false;
  }



}
