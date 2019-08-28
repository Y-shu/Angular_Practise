import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  // emulate--it uses the shadow DOM to encapsulate the view
  // is by default and it don't leek css to other components
  // it inherets the third party packages
  // encapsulation:ViewEncapsulation.Emulated
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
