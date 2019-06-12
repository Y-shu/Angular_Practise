import { Component, OnInit ,Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-two-way-child',
  templateUrl: './two-way-child.component.html',
  styleUrls: ['./two-way-child.component.css']
})
export class TwoWayChildComponent implements OnInit,OnChanges{
  @Input() parent_data;
  
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(change:SimpleChanges){
    console.log("OnChanges Triggred!");
    console.log(change);
    
    
  }

}
