import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-param-test',
  templateUrl: './param-test.component.html',
  styleUrls: ['./param-test.component.css']
})
export class ParamTestComponent implements OnInit {
  my_param_id:number;
  constructor(private my_activeRoute:ActivatedRoute) { 
    this.my_activeRoute.params.subscribe((my_Params:Params)=>{
    this.my_param_id=+my_Params['id'];
    })
  }

  ngOnInit() {
  }

}
