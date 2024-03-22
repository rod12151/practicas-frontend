import { Component, EventEmitter, Input,  OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UserRequest, UserResponse } from 'src/app/models/usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent  implements OnInit{
   @Input() userEdit?:UserResponse;
   @Output() actualizacionFinalizada=new EventEmitter<void>();
   
   
  constructor(private _userService:UserService){}
  public userAuxUpdate:any={}
  userUpdate:UserRequest={
    dni:'',
    name:'',
    lastName:'',
    profession:'',
    birthDate:'',

  }


  ngOnInit(){
    if (this.userEdit) {
      this.actualUser = this.userEdit;
      this.userAuxUpdate=this.userEdit as UserRequest
    }
    
  }
  actualUser:UserResponse|undefined;
  asigUse(){    
    this.userUpdate.name=this.userAuxUpdate.name;
    this.userUpdate.lastName=this.userAuxUpdate.lastName;
    this.userUpdate.dni=this.userAuxUpdate.dni;
    this.userUpdate.profession=this.userAuxUpdate.profession;
    

  }
  
  GuardarUsuario(){
    this.asigUse()
    const dni=this.userUpdate.dni||'';
    const user= this.userUpdate;
    
    this._userService.actualizarUsuario(dni,user).subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:(e)=>{
        console.error(e.error.message)
      },
      complete:()=>{
        this.actualizacionFinalizada.emit();
      }
    })  
  }
  cancelar(){
    this.actualizacionFinalizada.emit();
  }

  
  
}
