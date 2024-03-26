import { Component, OnInit } from '@angular/core';
import { LaborRegimeResponse } from 'src/app/models/laborRegime';
import { LaborRegimeService } from 'src/app/services/labor-regime.service';

@Component({
  selector: 'app-view-labor-regime',
  templateUrl: './view-labor-regime.component.html',
  styleUrls: ['./view-labor-regime.component.css']
})
export class ViewLaborRegimeComponent implements OnInit{
  laborRegime :any=[];
  viewUpdate:boolean=false;
  dataUpdate:any=[]
  dataKey:string='laborRegime'
  constructor(private laborRegimeservice:LaborRegimeService){}
  ngOnInit(): void {
      
    this.laborRegimeservice.listWorkConditions().subscribe(
      (data:any)=>{
        this.laborRegime=data;
      },
      (error)=>{
        console.log(error)
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
