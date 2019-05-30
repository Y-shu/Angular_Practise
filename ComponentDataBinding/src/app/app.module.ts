import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SibilingComponent } from './sibiling/sibiling.component';
import { ProBindingComponent } from './pro-binding/pro-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SibilingComponent,
    ProBindingComponent,
    EventBindingComponent,
    
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
