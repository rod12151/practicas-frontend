import { Component, OnInit } from '@angular/core';

import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
/*public user = {
  dni:'',
  name:'',
  lastName:'',
  profession:'',
  birthDate:''

}*/

//constructor(private userService:UserService){}
ngOnInit(): void {}

/*formSubmit(){
  console.log(this.user);
  if(this.user.dni == ' '||this.user.dni==null){
    alert('El nombre del usuario es requerido')
  }

  
  this.userService.AddUser(this.user).subscribe(
    (data)=>{
      console.log(data);
      alert('usuario gardado con exito');

    },(error)=>{
      console.log('ha ocurrido un error en el sistema')
    }
  )
}*/

















/*
  hide = true;
  usuario=new FormControl("",[Validators.required,Validators.minLength(6)])
  password = new FormControl('',[Validators.required,Validators.minLength(6)])
  correo = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessageEmail() {
    if (this.correo.hasError('required')) {
      return 'debe ingresar un correo';
    }

    return this.correo.hasError('email') ? 'no es un correo valido' : '';
  }

  getErrorMessageUser(){
    if(this.usuario.hasError('required')){
      return 'debe ingresar su usuario';
    }
    return this.usuario.hasValidator.length ? 'el usuario debe tener mas de 6 caracteres':'';
  }
  getErrorMessagePassword(){
    if(this.password.hasError('required')){
      return 'debe ingresar su contraseña';
    }
    return this.password.hasValidator.length ? 'la contraseña debe tener mas de 6 caracteres':'';
  }*/
}
