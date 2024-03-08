import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit{

  constructor( @Inject(MAT_SNACK_BAR_DATA) public data:any,
  public snackBarRef:MatSnackBarRef<NotifierComponent>){}
  getDynamicIcon(type: string){
    switch (type) {
      case 'alert':
        return 'priority_high'
       
      case 'error':
        return 'error';
      case 'success':
        return 'check_circle';
      // Agrega más casos según tus necesidades
      default:
        return '';
    }
  }
  
  ngOnInit(): void {
  
}

}
