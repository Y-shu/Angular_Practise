import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  my_param_id:number;
  // we need to access the params in the url
  // in routers we have activated route which is used to recognised on which route we are
  constructor(private my_route:ActivatedRoute) { 
    // importing activated route
    // inorder to access parames we have a predefined thing which returns an observable
    // called---params

  }

  ngOnInit() {
    this.my_route.params.subscribe((get_params:Params)=>{
      // '+' basically it returns a string but inorder to convert it to a number we use
      // '+' 
     this.my_param_id=+get_params['id'];
    })
  }

}
