import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-xchild',
  templateUrl: './xchild.component.html',
  styleUrls: ['./xchild.component.css']
})
export class XchildComponent implements OnInit {
  @Output() xchild_Event=new EventEmitter<{name:string;age:number;xchildMes:string}>();
  xchild_fun(){
    this.xchild_Event.emit({
      name:"yashu",
      age:26,
      xchildMes:"Hello this is xchild_Event"
    })
  }
  constructor() { }

  ngOnInit() {
  }

}
