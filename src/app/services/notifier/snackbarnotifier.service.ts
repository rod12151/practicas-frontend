import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from 'src/app/auxiliares/notifier/notifier/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarnotifierService {

  constructor(private snackBar:MatSnackBar) { }
  showNotification(displayMessage: string, buttonText: string, messageType: 'error' | 'success'|'alert') {
    this.snackBar.openFromComponent(NotifierComponent, {
      data: {
        message: displayMessage,
        buttonText: buttonText,
        type: messageType
      },
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: messageType
    });
  }
}
