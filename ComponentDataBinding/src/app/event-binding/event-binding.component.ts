import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  handler_fun1(){
    console.log("Its handler event 1!");
    
  }

  handler_fun2(){
    console.log("Its handler event 2!");
    
  }
  Check_$event(check_e){
    console.log(check_e);
    
  }
  handleClick(e){
    console.log(e.target);
    
  }
 
  
  myEvent(event){

  document.write("<h1>"+event+"</h1>");
  
  }
  OnSave(x){
    console.log("Saved!",x);
    
   }

  constructor() { 
    
  
  }

  ngOnInit() {
  }

}
