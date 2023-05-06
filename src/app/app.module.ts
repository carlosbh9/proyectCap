import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitComponent } from './paginas/git/git.component';
import { HomeComponent } from './nav/home/home.component';
import { HtmlyCss1Component } from './paginas/htmly-css1/htmly-css1.component';
import { HtmlyCss2Component } from './paginas/htmly-css2/htmly-css2.component';
import { HtmlyCss3Component } from './paginas/htmly-css3/htmly-css3.component';
import { HtmlyCss4Component } from './paginas/htmly-css4/htmly-css4.component';

@NgModule({
  declarations: [
    AppComponent,
    GitComponent,
    HomeComponent,
    HtmlyCss1Component,
    HtmlyCss2Component,
    HtmlyCss3Component,
    HtmlyCss4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
