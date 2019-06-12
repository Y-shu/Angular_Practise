import { Component, OnInit,OnChanges,DoCheck,AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  constructor() {
    
    document.write("<h2>I am Child constructor</h2>");
    
   }
   ngOnChanges(){
  
  document.write("<h2>I am Child OnChanges</h2>");
  
   }

  ngOnInit() {
   
    document.write("<h2>I am Child OnInit</h2>");
    
  }
  ngDoCheck(){
    
    document.write("<h2>I am Child DoCheck</h2>");
    
  }
  ngAfterContentInit(){
    
    document.write("<h2>I am Child AfterContentInit</h2>")
    
  }

}
