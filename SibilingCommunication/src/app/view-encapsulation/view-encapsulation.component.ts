import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css'],
  // native--it uses the shadow DOM to encapsulate the view
  // not effects the other components in terms of CSS
  // we loss effects of bootstrap styles(third party)
  // encapsulation:ViewEncapsulation.Native
})
export class ViewEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
