import { Component, OnInit, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import {butterService} from './../Services/butterCMS.service';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';


 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   //mq = window.matchMedia( "(min-width: 768px)" );

  closeNav()  { 
    this.toggle = !this.toggle;
  } 


 public toggle: boolean; 


public isScreenSmall$: Observable<any>;

  constructor(  ) { }

  
  
  ngOnInit() {
   
    this.toggle = false; 
   
   // Checks if screen size is less than 1024 pixels
  const checkScreenSize = () => document.body.offsetWidth < 768;

  // Create observable from window resize event throttled so only fires every 500ms
  const screenSizeChanged$ = fromEvent(window, 'resize').pipe(debounceTime(500)).pipe(map(checkScreenSize));

  // Start off with the initial value use the isScreenSmall$ | async in the
  // view to get both the original value and the new value after resize.
  this.isScreenSmall$ = screenSizeChanged$.pipe(startWith(checkScreenSize()))
    
  }





  /*
    closeNav():void {
      this.toggle = !this.toggle;
    } 

    */



}

