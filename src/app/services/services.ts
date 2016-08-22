import {Component} from '@angular/core';

@Component({
  selector: 'services',
  styleUrls: ['./services.css'],
  templateUrl: './services.html'
})

export class Services {
  public chosenServices = JSON.parse(sessionStorage.getItem('menuItems'));
}
