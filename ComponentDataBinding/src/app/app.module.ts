import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SibilingComponent } from './sibiling/sibiling.component';
import { ProBindingComponent } from './pro-binding/pro-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TwoWayChildComponent } from './two-way-binding/two-way-child/two-way-child.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SibilingComponent,
    ProBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    TwoWayChildComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
