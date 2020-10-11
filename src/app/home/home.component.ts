import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'עמוד הבית - איילת דן אדוונס ביטוחים';

  constructor(private titleService: Title) { }

  alertSuccess(){
    alert('פנייתך התקבלה בהצלחה!');
  
  }

  ngOnInit(){
    this.titleService.setTitle(this.title);
  }

}
