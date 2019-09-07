import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {HomeComponent} from 'src/app/home/home.component';
import { WelcomeService } from '../Services/welcome.service';
import {SidebarComponent} from 'src/app/sidebar/sidebar.component';







@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[WelcomeService, HomeComponent]
})
export class AboutComponent implements OnInit {
  public toggle: boolean;


  constructor( ) { }

  ngOnInit() {

    this.toggle = false;

  }

  closeNavy() {
    this.toggle = !this.toggle;
  }


}
