import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   private isClassApplied = false;
  toggleHeadClass() {
    //debugger;
     const head = document.querySelector('body');
    if (head) {
      if (this.isClassApplied) {
        head.classList.remove('sb-sidenav-toggled');
        
      } else {
        head.classList.add('sb-sidenav-toggled');
      }
      this.isClassApplied = !this.isClassApplied;
    }
  }

}
