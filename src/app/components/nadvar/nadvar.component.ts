import { Component } from '@angular/core';
import { UserResponse } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nadvar',
  templateUrl: './nadvar.component.html',
  styleUrls: ['./nadvar.component.css']
})
export class NadvarComponent {
  etiqueta = false;
  //declarar
  user?:UserResponse;
  
  constructor(public authService:AuthService){}

  ngOnInit(){
    //optener
    this.authService.userActual.subscribe(user => {
      this.user = user ? user.name : '';
    });
    const storedUser = this.authService.getUser();
    if (storedUser) {
      this.user = storedUser.name;
    }
  }
  

  public logout(){
    this.authService.logout();
    //window.location.href='';
  }

  highlightItem(): void {
    this.etiqueta = true;
  }

  resetItem(): void {
    this.etiqueta = false;
  }

  

}
