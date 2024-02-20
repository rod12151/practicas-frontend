import { Component,Input } from '@angular/core';

import { ExportAsService, ExportAsConfig, SupportedExtensions } from 'ngx-export-as';
@Component({
  selector: 'app-export-table',
  templateUrl: './export-table.component.html',
  styleUrls: ['./export-table.component.css']
})
export class ExportTableComponent {
  constructor(private exportAsService: ExportAsService) { }
  
  
  @Input() tableId:string='';

  
 
   get exportAsConfig(): ExportAsConfig {
    console.log(this.tableId);
    return{
      type: 'xlsx',
      elementIdOrContent: this.tableId

    }
     
   }
   export() { 
 
     this.exportAsService.save(this.exportAsConfig, 'reporte').subscribe(() => {
       // save started
     });
   }
}
