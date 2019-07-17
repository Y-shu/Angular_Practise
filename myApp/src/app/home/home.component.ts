import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('myForm',{static:true}) signUp:NgForm; 
  setToDefault=true;
  constructor() { }

  ngOnInit() {
  }
  mySubmit(myFormHandler){
    console.log(myFormHandler);
    
  }

}
