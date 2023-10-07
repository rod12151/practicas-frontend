import { Component, OnInit } from '@angular/core';
import { WorkConditionService } from 'src/app/services/work-condition.service';

@Component({
  selector: 'app-view-work-condition',
  templateUrl: './view-work-condition.component.html',
  styleUrls: ['./view-work-condition.component.css']
})
export class ViewWorkConditionComponent implements OnInit{


  workConditions:any = [
  ];

  constructor(private workconditionservice:WorkConditionService){}
  ngOnInit(): void {
      this.workconditionservice.listWorkConditions().subscribe(
        (dato:any)=>{
          this.workConditions=dato;
          console.log(this.workConditions);
        },
        (error)=>{
          console.log(error);
        }
      )
  }

}
