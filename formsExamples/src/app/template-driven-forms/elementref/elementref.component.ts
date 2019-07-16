import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-elementref',
  templateUrl: './elementref.component.html',
  styleUrls: ['./elementref.component.css']
})
export class ElementrefComponent implements OnInit {
  // ElementRef displays all tags in the form
  // this way of accessing the form is not advicable as effective way of accessing
  // data will be in the form json format and that format is not represented over 
  // here....
  OnSubmit(myFormHandler:ElementRef){
   console.log(myFormHandler);
   
  }
  constructor() { }

  ngOnInit() {
  }

}
