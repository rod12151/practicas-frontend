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

}
