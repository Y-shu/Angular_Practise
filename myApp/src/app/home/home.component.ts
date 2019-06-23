import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emailInput(emailInputValue){
    console.log(emailInputValue.value);
    }
    passwordInput(passwordInput){
      console.log(passwordInput.value);
      
    }
  constructor() { }

  ngOnInit() {
  }

}
