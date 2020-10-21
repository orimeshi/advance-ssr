import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit {
title = 'ביטוח אונליין - איילת דן אדוונס ביטוחים';

  constructor(private titleService: Title) { }

  alertSuccess(){
    alert('פנייתך התקבלה בהצלחה!');
  
  }
  toggleModal(){
    var modal = $('.modal');
   
    modal.toggleClass('is-active');
  }


  ngOnInit(){
    this.titleService.setTitle(this.title);
  
  }

}
