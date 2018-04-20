import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ThingModule } from './Thing/ThingModule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ThingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
