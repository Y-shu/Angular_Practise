import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  @Input() childDataProperty;
  home2Parent ="It's home2 parent property";
  constructor() { }

  ngOnInit() {
  }

}
