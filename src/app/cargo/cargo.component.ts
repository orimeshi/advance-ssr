import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouteConfigLoadStart } from '@angular/router';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit {
title = 'ביטוח מטענים - איילת דן אדוונס ביטוח';

  constructor(private titleService: Title) { }

  alertSuccess(){
    alert('פנייתך התקבלה בהצלחה!');
  
  }


  ngOnInit(){
    this.titleService.setTitle(this.title);
  }

}
