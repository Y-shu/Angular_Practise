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
  
  // defcheckIt:true;

  // --------------Setting Values using setValue method-----------------
  Suggested(){
    this.signUp.form.setValue({
      groupEmailPassword:{
        email:'kittu@gmail.com',
        password:'kittu'
       
      },
      naming:'kittu',
      checkIt:true  
     
    });
  }
  // this will bring the form into initial stage
  reset(){
    this.signUp.reset();
  

  }
  constructor() { }

  ngOnInit() {
  }
  mySubmit(myFormHandler){
    console.log(myFormHandler);
    
  }

}
