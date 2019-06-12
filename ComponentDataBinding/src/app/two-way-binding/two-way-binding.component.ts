import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  message="Two-way data binding using ngModel";
  Name="yashu";
  trig_Fun(ref){
    console.log(ref.value);
    
  }
  dollar_event(e){
    console.log(e.target.value);
    
  }
  @ViewChild("re") x:ElementRef; 
  view_child(){
   console.log(this.x.nativeElement.value);
   
  }
  constructor() {

   }

  ngOnInit() {
  }

}
