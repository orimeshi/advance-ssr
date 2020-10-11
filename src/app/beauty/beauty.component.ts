import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss']
})
export class BeautyComponent implements OnInit {
title = 'ביטוח מכוני יופי - איילת דן אדוונס ביטוחים';

  constructor(private titleService: Title) { }

  alertSuccess(){
    alert('פנייתך התקבלה בהצלחה!');
  
  }


  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
