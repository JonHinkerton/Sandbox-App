import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThingComponent } from './ThingComponent';

@NgModule({
  declarations: [ ThingComponent ],
  imports: [ BrowserModule ],
  exports: [ ThingComponent ],
  providers: []
})
export class ThingModule { }
