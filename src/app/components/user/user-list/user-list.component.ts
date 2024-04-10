import { Component, OnInit } from '@angular/core';
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
    
    private _userService : UserService

  ){}
  actualizarUser:boolean=false;
  userUpdate:any;
  ngOnInit(): void {
      this.getUsers()
  }

  getUsers(){
   this._userService.findAllUsers().subscribe((userData:UserResponse[])=>{
      this.users = userData;
  });}

  updateUser(user:UserResponse){
    this.userUpdate=user;
    this.actualizarUser=true;

  }
  finUpdate(){
    this.actualizarUser=false;
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
