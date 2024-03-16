import { Component, Input } from '@angular/core';
import { asigUserServiceResponse } from 'src/app/models/asigUserService';

@Component({
  selector: 'app-table-user-asig-servicio',
  templateUrl: './table-user-asig-servicio.component.html',
  styleUrls: ['./table-user-asig-servicio.component.css']
})
export class TableUserAsigServicioComponent {
  @Input() data:asigUserServiceResponse[]=[];
  @Input() tableId:string='';

}
