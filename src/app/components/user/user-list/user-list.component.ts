import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioResponse } from 'src/app/models/servicios';
import { UserResponse } from 'src/app/models/usuario';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: UserResponse[]=[]
  constructor(
    //Inyectamos el UserService que hemos importado
    private _userService : UserService,
    
  ){}
  //De la documentación: A lifecycle hook that is called after Angular 
  //has initialized all data-bound properties of a directive.
  ngOnInit(): void {
      this.getUsers()
  }

  getUsers(){
    //Utilizamos el servicio inyectado para encontrar los usuarios
    this._userService.findAllUsers().subscribe((userData:UserResponse[])=>{
      this.users = userData;
  });
  }
  changeStatus(dni:string){
    Swal.fire({
      title: '¡Atención!',
    text: 'Esta acción puede ser peligrosa. ¿Estás seguro de que quieres continuar?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, continuar',
    cancelButtonText: 'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        this._userService.changeStatus(dni).subscribe(
          ()=>{
            this.successAlert();
            this.getUsers();
          },
          (error)=>{
            console.error('error al eliminar usuario',error)
            this.errorAlert(error.error.message);
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
