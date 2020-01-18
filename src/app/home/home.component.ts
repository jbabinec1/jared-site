import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import {butterService} from '/Users/Jared/jared-site/src/app/Services/butterCMS.service';


 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  closeNav()  {
    this.toggle = !this.toggle;
  } 

 public toggle: boolean; 

  constructor(  ) { }

  
  

  ngOnInit() {
   
    this.toggle = false; 
    
  }





  /*
    closeNav():void {
      this.toggle = !this.toggle;
    } 

    */



}

