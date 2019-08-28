/**
 1.here 'output' decorater is used to send data from child component to parent
 component.
 2.it is supposed to import from angular/core library
 3.we create a event here using event emitter even this is imported from
 angular/core library
 3.we use emit method to write our logic
 **/
import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-xchild',
  templateUrl: './xchild.component.html',
  styleUrls: ['./xchild.component.css']
})
export class XchildComponent implements OnInit {
  // created xchild_Event is sent to parent component of this particular component
// which is x component .....
  @Output() xchild_Event=new EventEmitter<{name:string,age:number,xchildMes:string}>();
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
