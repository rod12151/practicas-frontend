import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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

}
