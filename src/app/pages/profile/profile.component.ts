import { Component } from '@angular/core';
import { UserResponse } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  user:any;
  constructor(private authService: AuthService) { }
ngOnInit():void{
  this.user=this.authService.getUser()
}
  

}
