import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {HomeComponent} from 'src/app/home/home.component';
import { WelcomeService } from '../Services/welcome.service';
import {SidebarComponent} from 'src/app/sidebar/sidebar.component';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';







@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[WelcomeService, HomeComponent]
})
export class AboutComponent implements OnInit {

  public toggle: boolean;

  public isScreenSmall$: Observable<any>;

  constructor( ) { }

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

  

  closeNavy() {
    this.toggle = !this.toggle;
  }


}
