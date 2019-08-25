import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {butterService} from '/Users/Jared/jared-site/src/app/Services/butterCMS.service';


 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public toggle: boolean; 

  constructor() { }

  
  

  ngOnInit() {
   
    this.toggle = false; 
    
  }


    closeNav(){
      this.toggle = !this.toggle;
    } 



}

