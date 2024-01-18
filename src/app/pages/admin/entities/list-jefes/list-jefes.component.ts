import { Component, OnInit } from '@angular/core';
import { HeadserviceResponse } from 'src/app/models/headService';
import { HeadServiceServiceService } from 'src/app/services/head-service-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-jefes',
  templateUrl: './list-jefes.component.html',
  styleUrls: ['./list-jefes.component.css']
})
export class ListJefesComponent implements OnInit{
  response : any=[];
  errorResponse:any=[];
  
  constructor(private headService:HeadServiceServiceService){}

  ngOnInit(): void {
    this.getHeadServices()
      

  }
  getHeadServices(){
    this.headService.listHeadService('false').subscribe({
      next:(data)=>{
        this.response=(data)},
      error:(e)=>console.error(e.error),
      complete:()=>console.log(this.response)

    })
  }
  deleteJefeService(code:string,dni:string){
    this.headService.deleteHeadService(code,dni)
  }
  
  changeStatus(code:string ,dni:string){
    Swal.fire({
      title: '¡Atención!',
    text: 'Esta acción puede ser peligrosa. ¿quieres continuar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, continuar',
    cancelButtonText: 'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){

        this.headService.deleteHeadService(code,dni).subscribe(
          ()=>{
            this.successAlert();
            this.getHeadServices();
          },
          (error)=>{
            console.error('error al eliminar usuario',error)
            this.errorAlert(error.message);
          }
        )
      }
    })
    
  
    
  }
 
  errorAlert(error:string) {
    Swal.fire({
      title: '¡advertencia!',
      text: error,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
  successAlert() {
    Swal.fire({
      text: 'acción Exitosa',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
}
