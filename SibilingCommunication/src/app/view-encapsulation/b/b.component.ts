import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  //none--it uses the shadow DOM to encapsulate the view
  // globally applied to all components including all 3rd party modules
  encapsulation:ViewEncapsulation.None
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
