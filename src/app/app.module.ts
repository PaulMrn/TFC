import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {Services} from './services/services';
import {Home} from './home/home';
import {UserChoice} from './user-choice/user-choice';
import Car from './services/car/car';
import Flight from './services/flight/flight';
import Hotel from './services/hotel/hotel';
import Restaurant from './services/restaurant/restaurant';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [AppComponent, Services, Home, UserChoice, Car, Flight, Hotel, Restaurant],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})

export class AppModule {

}
