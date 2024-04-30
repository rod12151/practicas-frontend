import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Genero, GeneroValue, UserRequest } from 'src/app/models/usuario';
import { UserService } from 'src/app/services/user.service';
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
  nameForm = new FormControl('',[Validators.required, Validators.nullValidator,Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/)]);
  lastNameForm = new FormControl('',[Validators.required, Validators.nullValidator,Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/)]);
  professionForm = new FormControl('',[Validators.required, Validators.nullValidator,Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/)]);
  fechaCumple = new FormControl([Validators.required, Validators.nullValidator]);
  generoValue:Genero= Genero.None;
 
  //no permitir letras en el campo dni
  filtrarNumeros(event: any) {
    const inputValue = event.target.value;
    const numericInput = inputValue.replace(/[^0-9]/g, ''); // Filtra solo los números
    event.target.value = numericInput; // Asigna el valor filtrado de nuevo al campo de entrada
  }

  filtrarLetras(event: any) {
    const inputValue = event.target.value;
    const alphaInput = inputValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]/g, ''); // Filtra solo las letras y caracteres con acentos
    event.target.value = alphaInput; // Asigna el valor filtrado de nuevo al campo de entrada
  }

  guardar() {
    if (this.formularioValid()) {

      const request=this.datos();
      if(request!=null){
        this.guardarUser(request)

      }
      console.log(request)
    }
    
    else{
      console.log("algo salio mal")
    }
  }
  datos(){
    
    if(this.formularioValid()){
      this.user.dni=this.dniForm.value||'';
      this.user.name=this.nameForm.value||'';
      this.user.lastName=this.lastNameForm.value||'';
      this.user.profession=this.professionForm.value||'';
      const fecha= this.dateAString.dateI(this.fechaCumple.value)
      this.user.birthDate=fecha;
      this.user.genero = this.generoValue
      return this.user;
    }else{
      this.snacAlert.showNotification('complete el formulario','ok','alert');
      return null
    }
  }

  
  guardarUser(user:UserRequest) {
    this._userService.createUser(user).subscribe({
      next:void{
        },
      error:(e)=>{
        if(e.error.errors){
          this.snacAlert.showNotification(e.error.errors,'ok','error')
        }else{
          this.snacAlert.showNotification(e.error.message,'ok','error')
        }
        
      },
      complete:()=>{
        this.redirectUserList();
      }
    })

  }
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

   generos: GeneroValue[]=[
    {viewValue:'Masculino',value:'MASCULINO'},
    {viewValue:'Femenino',value:'FEMENINO'},
    {viewValue:'Prefiero no Decirlo',value:'NONE'}
   ]

}
