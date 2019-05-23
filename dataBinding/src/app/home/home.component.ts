import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// --------------------First way(userInput) of binding using event.target.value----------------------------------
myInput='';
clickMe(event:Event){
  

  this.myInput="DOM event got binded to UserInput!";
  
}  
name;
  inputField(event){
    // console.log(event);
    // console.log(event.target.value);
    this.name=event.target.value;
    
  }
  
// --------------------Second way of binding using HTMLInputElement-----------------------------------
vals="";
  keyOn(value:string){
    this.vals += value+'|';
  }

getData(getRef:HTMLInputElement){    
    console.log(getRef.value);
  }
  // --------------------------------------------------------------------
  name1:string ='';
  setValue(){
    this.name1='Yashu '
  }

// --------------------Third way of binding using @ViewChild------------------------
  // ViewChild is a method used to get data in input field
  // here displayData is my variable holding data present in viewData
  viewDATA;
  @ViewChild('viewData') displayData:ElementRef;
  onClick(){
    // console.log(this.displayData);
    this.viewDATA=this.displayData.nativeElement.value;
  }
  
  displayNativeElementValue;
  @ViewChild('viewChildInput') displayViewChildcontent:ElementRef;
  dispalyViewChildContent(){
    this.displayNativeElementValue=this.displayViewChildcontent.nativeElement.value;
  console.log(this.displayViewChildcontent.nativeElement.value);
  }
  constructor() {
    // console.log(this.displayData);
    
   }

  ngOnInit() {
  }

}
