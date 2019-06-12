import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildOfchildComponent } from './child/child-ofchild/child-ofchild.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildOfchildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
