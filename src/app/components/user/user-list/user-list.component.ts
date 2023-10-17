import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    //Inyectamos el UserService que hemos importado
    private _userService : UserService,
    private router:Router
  ){}
  //De la documentación: A lifecycle hook that is called after Angular 
  //has initialized all data-bound properties of a directive.
  ngOnInit(): void {
      this.getUsers();
  }

  getUsers(){
    //Utilizamos el servicio inyectado para encontrar los usuarios
    this._userService.findAllUsers().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda
      userData => {this.users = userData} 
        
    );
  }
  changeStatus(dni:string){
    console.log(dni)
    this._userService.changeStatus(dni).subscribe(
      ()=>{
        this.redirectUserList();

      },
      (error)=>{
        console.error('error al eliminar usuario',error)
      }
    )
  
    
  }
  redirectUserList() {
    this.router.navigate(['admin/userlist']);
  }

}
