import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Inorder to use forms-TemplateDrivenForms
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule,Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Router definition
const my_routes:Routes = [
  // We have to configure the route so then only we can use then 
  // we configure using RouterModule.forRoot()
{'path':'home',component:HomeComponent},
// last route and wildCard
{'path':'**',component:PageNotFoundComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // template driven forms
    FormsModule,
    RouterModule.forRoot(my_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
