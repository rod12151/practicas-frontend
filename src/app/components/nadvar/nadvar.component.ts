import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nadvar',
  templateUrl: './nadvar.component.html',
  styleUrls: ['./nadvar.component.css']
})
export class NadvarComponent {
  etiqueta = false;
  //declarar
  user:any;
  
  constructor(public authService:AuthService){}

  ngOnInit(){
    //optener
    this.authService.userActual.subscribe(user => {
      this.user = user ? user.fullName : '';
    });
    const storedUser = this.authService.getUser();
    if (storedUser) {
      this.user = storedUser.fullName;
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
