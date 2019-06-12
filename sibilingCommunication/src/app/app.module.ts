import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';
import { XchildComponent } from './x/xchild/xchild.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { BComponent } from './view-encapsulation/b/b.component';
import { AComponent } from './view-encapsulation/a/a.component';
import { KComponent } from './k/k.component';
import { KchildComponent } from './k/kchild/kchild.component';
import { LComponent } from './l/l.component';
import { DataService } from './data.service';
import { MainServiceService } from './main-service.service';


@NgModule({
  declarations: [
    AppComponent,
    XComponent,
    YComponent,
    XchildComponent,
    ViewEncapsulationComponent,
    BComponent,
    AComponent,
    KComponent,
    KchildComponent,
    LComponent,
   
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService,MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
