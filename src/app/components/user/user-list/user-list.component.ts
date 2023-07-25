import { Component, OnInit } from '@angular/core';
import { ServicioResponse } from 'src/app/models/servicios';
import { UserResponse } from 'src/app/models/usuario';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users?: UserResponse[]
  servicios?:ServicioResponse[]
  constructor(
    //Inyectamos el UserService que hemos importado
    private userService : UserService
  ){}
  //De la documentación: A lifecycle hook that is called after Angular 
  //has initialized all data-bound properties of a directive.
  ngOnInit(): void {
      this.getUsers();
  }

  getUsers(){
    //Utilizamos el servicio inyectado para encontrar los usuarios
    this.userService.findAllUsers().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda
      userData => {this.users = userData} 
        
    );
   /*console.log(this.users?.values)
    this.userService.findAllServicios().subscribe(
      serviceData =>{ this.servicios=serviceData}
      
    );
    console.log(this.servicios?.values)*/
    
  }

}
