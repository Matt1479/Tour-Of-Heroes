import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; // automatically declared by CLI

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent // this also was automatically declared by CLI
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
