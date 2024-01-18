import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-jefes',
  templateUrl: './add-jefes.component.html',
  styleUrls: ['./add-jefes.component.css']
})
export class AddJefesComponent {
  constructor(private _serviceService:ServicesService){}
  listServicio:any=[]
  private dniUser:String='';
  private codeServicio:string='';
  private uSelected:boolean=false;
  public usuarioSelect:any=''
  ngOnInit(): void {
    this.optenerServicios()
      

  }

  optenerServicios(){
    return this._serviceService.listServiceByStatus('false').subscribe({
      next:(data)=>{
        this.listServicio=(data)},
      error:(e)=>console.error(e.error),
      complete:()=>console.log(this.listServicio)

    })
  }
  usuarioSeleccionado(resultado: any) {
    
    this.usuarioSelect = resultado;
    this.dniUser= resultado.dni;
    console.log(this.dniUser)
    console.log(resultado);
    this.uSelected = true;

  }

}
