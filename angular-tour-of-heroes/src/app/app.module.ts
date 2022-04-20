import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // importing this so that the NgModel will work

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; // automatically declared by CLI

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent, // this also was automatically declared by CLI
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // declared by CLI
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
