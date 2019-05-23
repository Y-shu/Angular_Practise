import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  myEvent(event){

  document.write("<h1>"+event+"</h1>");
  
  }
  myEvent1(e1){
    document.write("<h1>focus</h1>");
  }
  myEvent2(e2){
    document.write("<h1>blur</h1>");

  }
  myEvent3(e3){
    document.write("<h1>mousedown</h1>");

  }
  myEvent4(e4){
    document.write("<h1>scroll</h1>");

  }
  myEvent5(e5){
    document.write("<h1>mouseenter</h1>");

  }
  constructor() { }

  ngOnInit() {
  }

}
