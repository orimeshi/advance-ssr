import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Title } from '@angular/platform-browser';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery/dist/jquery.min.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'עמוד הבית - אדוונס סוכנות לביטוח';
  
  

  constructor(private titleService:Title, @Inject(PLATFORM_ID) private platformId: Object,
     ) { }
  
  
  alertSuccess(){
    alert('פנייתך התקבלה בהצלחה!');
  }
 toggleBurger() {
    var burger = $('.burger');
    var menu = $('.navbar-menu');
    burger.toggleClass('is-active');
    menu.toggleClass('is-active');
}


  ngOnInit(){
    if(isPlatformBrowser(this.platformId)){
	
    

}
}
}
  
