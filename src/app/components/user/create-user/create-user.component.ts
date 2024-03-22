import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserRequest } from 'src/app/models/usuario';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateAStringService } from 'src/app/services/data/date-astring.service';
import { SnackbarnotifierService } from 'src/app/services/notifier/snackbarnotifier.service';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  //Cramos un nuevo userRequest vacío
  user: UserRequest = {
    dni:'',
    name:'',
    lastName:'',
    profession:'',
    birthDate:'',

  }
  


  constructor(
    private _userService: UserService,
    private router: Router,
    private dateAString:DateAStringService,
    private snacAlert:SnackbarnotifierService  ) { }

  
  ngOnInit(): void {

  }
  dniForm = new FormControl('',[Validators.required, Validators.nullValidator, Validators.pattern(/^([0-9])*$/)]);
  nameForm = new FormControl('',[Validators.required, Validators.nullValidator,Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]);
  lastNameForm = new FormControl('',[Validators.required, Validators.nullValidator,Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]);
  professionForm = new FormControl('',[Validators.required, Validators.nullValidator,Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]);
  fechaCumple = new FormControl([Validators.required, Validators.nullValidator]);
  
  
 
  
  guardar() {
    if (this.formularioValid()) {

      const request=this.datos();
      if(request!=null){
        this.guardarUser(request)

      }
    }
    
    else{
    }
  }
  datos(){
    if(this.formularioValid()){
      this.user.dni=this.dniForm.value||'';
      this.user.name=this.nameForm.value||'';
      this.user.lastName=this.lastNameForm.value||'';
      this.user.profession=this.professionForm.value||'';
      const fecha= this.dateAString.dateI(this.fechaCumple.value)
      this.user.birthDate=fecha
      return this.user;
    }else{
      this.snacAlert.showNotification('complete el formulario','ok','alert');
      return null
    }
  }


  //Este método es llamado desde el formulario
  //Se encarga de disparar el método de guardado de usuarios
  
  //Este método llama al createUser de userService.
  
  guardarUser(user:UserRequest) {
    this._userService.createUser(user).subscribe({
      next:void{
        },
      error:(e)=>{
        this.snacAlert.showNotification(e.error.message,'ok','error')
      },
      complete:()=>{
        this.redirectUserList();
      }
    })

  }
     /* userData => {
        console.log(userData);
        this.redirectUserList();
       

      },
      error => {
        console.log(error);
        
      }
    );*/
  
  //Redirección a lista de usuarios
  redirectUserList() {
    this.router.navigate(['admin/userlist']);
  }

  formularioValid(){
    return(
      this.dniForm.valid&&
      this.nameForm.valid&&
      this.lastNameForm.valid&&
      this.professionForm.valid&&
      this.fechaCumple.valid
      )
  }
  
  dateFilter = (d: Date|null): boolean => {
    const date1 = (d)||new Date
    const date2 = new Date()

    // Prevent Saturday and Sunday from being selected.
    return date1 <date2
  };

}
