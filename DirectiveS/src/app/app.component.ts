import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x=[1,2,3,4,5];
  cond=false;
  title = 'DirectiveS';
}
