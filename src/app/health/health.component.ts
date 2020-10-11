import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
title = 'ביטוח בריאות - איילת דן אדוונס ביטוחים';

  constructor(private titleService: Title) { }

  alertSuccess(){
    alert('פנייתך התקבלה בהצלחה!');
  
  }


  ngOnInit(){
    this.titleService.setTitle(this.title);
  }

}
