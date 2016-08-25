import {Component} from '@angular/core';

@Component({
  selector: 'services',
  styleUrls: ['./services.css'],
  templateUrl: './services.html'
})

export class Services{

  public chosenServices = JSON.parse(sessionStorage.getItem('menuItems'));
  public menuItems = JSON.parse(sessionStorage.getItem('itemsList'));

  currentService(item, index) {

    for (var j = 0; j < this.menuItems.length; j++) {  
      console.log(this.menuItems[j].selected);
      this.menuItems[j].selected = false;
		}

    this.menuItems[index].selected = true;

  }
  
}