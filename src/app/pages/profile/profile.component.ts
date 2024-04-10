import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataServiceDataService } from 'src/app/services/data/data-service-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  user:any;
  viewUpdateUser=false;
  userUpdate:any;

  constructor(
    private authService: AuthService,

    private router:Router) { }
ngOnInit():void{
  this.user=this.authService.getUser()

}

mostrarComponetUpdateUser(user:UserResponse){
  
  this.userUpdate=user;
  
  this.viewUpdateUser=true;
  
  
}
ocultarComponentUpdateUser(){
  this.viewUpdateUser=false;
}
  

}
