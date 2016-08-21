import {Component} from '@angular/core';

@Component({
  selector: 'services',
  styleUrls: [],
  templateUrl: './services.html'
})

export class Services {
  public chosenServices = JSON.parse(localStorage.getItem('menuItems'));
}
