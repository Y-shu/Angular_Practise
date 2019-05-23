import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  //here parent message is customized property
  @Input() parent_message:string;
 constructor() { }

  ngOnInit() {
  }

}
