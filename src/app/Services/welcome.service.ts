import { Injectable } from '@angular/core';
import {OnInit, ElementRef} from '@angular/core';
import {HomeComponent} from 'src/app/home/home.component';

@Injectable({
  providedIn: 'root'
})


export class WelcomeService {

  closeNavyParent()  {
    this.HomeClone.toggle = !this.HomeClone.toggle;
  } 

 public toggle: boolean; 

  constructor(public HomeClone: HomeComponent) { }

  ngOnInit() {
   
    this.toggle = false; 
    
  }
}
