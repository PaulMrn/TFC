import {Routes} from '@angular/router';
import {Services} from './services/services';
import {Home} from './home/home';
import {UserChoice} from './user-choice/user-choice';
import Car from './services/car/car';
import Flight from './services/flight/flight';
import Hotel from './services/hotel/hotel';
import Restaurant from './services/restaurant/restaurant';
import VAT from './services/vat/vat';
import Interpreter from './services/interpreter/interpreter';
import Hostess from './services/hostess/hostess';
import Delivery from './services/delivery/delivery';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', terminal: true},
  {path: 'home', component: Home},
  {path: 'user-choice', component: UserChoice},
  {path: 'services', component: Services,
    children: [
      { path: '', redirectTo: 'flight', pathMatch: 'full' },
      { path: 'car', component: Car },
      { path: 'flight', component: Flight },
      { path: 'hotel', component: Hotel },
      { path: 'restaurant', component: Restaurant },
      { path: 'vat', component: VAT },
      { path: 'interpreter', component: Interpreter },
      { path: 'hostess', component: Hostess },
      { path: 'delivery', component: Delivery }
    ]
  }
];

