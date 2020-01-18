import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Jareds website';


/* Might revisit this scroll header this. With the side nav it looks kinda shitty and not worth it atm
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 20) {
       let element = document.getElementById('navbar');
       element.classList.add('navScroll');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('navScroll'); 
     }
  }

*/





}
