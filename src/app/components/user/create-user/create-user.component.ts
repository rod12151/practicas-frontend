import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRequest } from 'src/app/models/usuario';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  //Cramos un nuevo userRequest vacío
  user: UserRequest = new UserRequest();

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar,

  ) { }

  
  ngOnInit(): void {

  }
  


  //Este método es llamado desde el formulario
  //Se encarga de disparar el método de guardado de usuarios
  onSubmitForm() {
    console.log(this.user);
    this.commitUser();
  }
  //Este método llama al createUser de userService.
  commitUser() {
    this.userService.createUser(this.user).subscribe(
      userData => {
        console.log(userData);
        //Llamamos al método de redirección para volver a la lista de usuarios
        //Swal.fire('Usuario Guardado', 'Usuario registrado con exito en el sistema', 'success');
        this.redirectUserList();

      },
      error => {
        console.log(error);
        
      }
    );
  }
  //Redirección a lista de usuarios
  redirectUserList() {
    this.router.navigate(['admin/userlist']);
  }

}
