import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  showSubMenu: number | null = null;
  
  toggleSubMenu(buttonNumber: number) {
    if (this.showSubMenu === buttonNumber) {
      this.showSubMenu = null; // Si ya está abierto, cierra el submenú haciendo clic nuevamente en el botón
    } else {
      this.showSubMenu = buttonNumber; // Abre el submenú correspondiente al botón clickeado
    }
  }

}
