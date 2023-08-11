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
  /* userErrror:string=""
 
   addUserForm = this.formBuilder.group({
     dni:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
     name:['',[Validators.required]],
     lastName:['',[Validators.required]],
     profession:['',[Validators.required]],
     birthDate:['1998-11-25',[Validators.required,Validators.compose]],
 
 
   })*/

  //Cramos un nuevo userRequest vacío
  user: UserRequest = new UserRequest();

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar,

  ) { }

  /*get dni(){
    return this.addUserForm.controls.dni
  }
  get name(){
    return this.addUserForm.controls.name
  }
  get lastName(){
    return this.addUserForm.controls.lastName
  }
  get profession(){
    return this.addUserForm.controls.profession
  }
  get birthDate(){
    return this.addUserForm.controls.birthDate
  }*/
  ngOnInit(): void {

  }
  /*
    addUser(){
      if(this.addUserForm.valid){
        this.userService.createUser(this.addUserForm.value as UserRequest).subscribe({
          next:(userData)=>{
            console.log(userData);
          },
          error:(errorData)=>{
            console.error(errorData);
            this.userErrror=errorData;
          },
          complete:()=>{
            console.info("usuario Agregado");
            this.router.navigateByUrl('/userlist');
            this.addUserForm.reset();
          }
        });
  
      }else{
        this.addUserForm.markAllAsTouched();
        alert("error")
      }
    }*/


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
