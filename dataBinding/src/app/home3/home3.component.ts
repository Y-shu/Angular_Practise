import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {
  @Input() child3Property;
  constructor() { }

  ngOnInit() {
  }

}
