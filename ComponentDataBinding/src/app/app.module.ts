import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SibilingComponent } from './sibiling/sibiling.component';
import { ProBindingComponent } from './pro-binding/pro-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { CommunicateComponent } from './communicate/communicate.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SibilingComponent,
    ProBindingComponent,
    EventBindingComponent,
    CommunicateComponent,
    Child1Component,
    Child2Component,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
