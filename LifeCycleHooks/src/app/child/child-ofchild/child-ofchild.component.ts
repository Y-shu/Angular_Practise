import { Component, OnInit ,DoCheck,AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-child-ofchild',
  templateUrl: './child-ofchild.component.html',
  styleUrls: ['./child-ofchild.component.css']
})
export class ChildOfchildComponent implements OnInit {

  constructor() {
  
    document.write("<h2>I am ChildOfChild Constructor</h2>");
    
   }
   ngOnChanges(){
     
     document.write("<h2>I am Child OnChanges</h2>");
     
   }

  ngOnInit() {
    
    document.write("<h2>I am ChildOfChild OnInit</h2>");
    
  }
  ngDoCheck(){
    
    document.write("<h2>I am ChildOfChild DoCheck</h2>");
    
    
  }
  ngAfterContentInit(){
    
    document.write("<h2>I am ChildOfChild AfterContentInit</h2>");
    
  }



}
