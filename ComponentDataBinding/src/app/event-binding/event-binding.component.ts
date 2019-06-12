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
  
  constructor() { }

  ngOnInit() {
  }

}
