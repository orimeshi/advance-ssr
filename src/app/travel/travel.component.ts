import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
title = 'ביטוח נסיעות לחו"ל - איילת דן אדוונס ביטוחים';

  constructor(private titleService: Title) { }

  alertSuccess(){
    alert('פנייתך התקבלה בהצלחה!');
  
  }


  ngOnInit(){
    this.titleService.setTitle(this.title);
  }

}
