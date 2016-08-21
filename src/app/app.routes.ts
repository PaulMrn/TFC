import {Routes} from '@angular/router';
import {Services} from './services/services';
import {Home} from './home/home';
import Car from './services/car/car';
import Flight from './services/flight/flight';
import Hotel from './services/hotel/hotel';
import Restaurant from './services/restaurant/restaurant';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', terminal: true},
  {path: 'home', component: Home},
  {path: 'services', component: Services,
    children: [
      { path: '', redirectTo: 'flight', pathMatch: 'full' },
      { path: 'car', component: Car },
      { path: 'flight', component: Flight },
      { path: 'hotel', component: Hotel },
      { path: 'restaurant', component: Restaurant }
    ]
  }
];

