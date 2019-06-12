import { Component ,OnInit,OnChanges,DoCheck,AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// When an angular application runs first thing that gets executed are
// content inside:
/**
 *Constructor--these are generally used to create an Object

  *OnInit--Initilizes directives /component after angular "first" dislays data-bouned properties
           and sets the directives/component's input properties
           called once after the "first" ngOnChanges()
  */
export class AppComponent  {
  title = 'LifeCycleHooks';
  constructor(){
    
    document.write("<h2>I am Parent Constructor</h2>");
  

    
  }
  /*
   *OnChanges--
   1.this one amoung the hooks of angular life cycle
   2.Responeded when there are any changes occuried in data-bounded properties
   3.this method receives simpleChanges object of current and previous property values
   4.called before ngOnInit and whenever one or more data-bounded properties changes
  */ 
  
  ngOnChanges(){
   
   document.write("<h2>I am Parent OnChanges</h2>");
   
  }
  ngOnInit(){
   
   document.write("<h2>I am Parent OnInit</h2>");
   
  }
  /*
  *Detects the changes and act upon changes that angular cannot identifies on its own
  *called during every change detection run
  * called immediately after OnChange() and OnInit()
   */ 
  ngDoCheck(){
  
   document.write("<h2>I am Parent DoCheck</h2>");
   
  }
  /*
  *
  */ 
  ngAfterContentInit(){
    
    document.write("<h2>I am Parent AfterContentInit</h2>");
    
  }
}
