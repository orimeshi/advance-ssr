import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  title = 'ביטוח עסק - איילת דן אדוונס ביטוחים';
  
  constructor(private titleService:Title) { }

  alertSuccess(){
    alert('פנייתך התקבלה בהצלחה!');
  
  }


  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
