import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';

@Component({
  selector: 'services',
  styleUrls: ['./services.css'],
  templateUrl: './services.html'
})

export class Services{

  // all menu item available
  public menu = JSON.parse(sessionStorage.getItem('menuItems'));
  // selected menu item
  public selectedMenu = JSON.parse(sessionStorage.getItem('itemsList'));
  // first item in selectedMenu(top menu) after adding and removing items => to built router-link url
  public clickedService = "";

  // reload page and set item on selected = true
  currentService(item, index) {

    for (var j = 0; j < this.selectedMenu.length; j++) {  
      this.selectedMenu[j].selected = false;
		}
    this.selectedMenu[index].selected = true;
  }

  // on switch btn in dropdown menu
  selectionSystem(service, index) {
    // actualize selected boolean
    if(this.menu[index].selected){
      this.menu[index].selected = false;
    } else {
      this.menu[index].selected = true;
    }  
    
    // get first selectMenu item
    if(this.menu[index].name == this.selectedMenu[0].name){
        this.clickedService = this.selectedMenu[1].name.toLowerCase();
    } else {
      this.clickedService = this.selectedMenu[0].name.toLowerCase();
    }

    // loop for adding and removing items
    for(var j = 0; j < this.selectedMenu.length; j++){
      // if exist already
      if(this.menu[index].name == this.selectedMenu[j].name){
        this.selectedMenu.splice([j], 1);
      }
      // if not
      if (this.menu[index].selected){
        this.selectedMenu.push({ name: this.menu[index].name, selected: false });
        break;
      }
    }
    
    var selectedInput: any = document.getElementById('selectedInput');
    selectedInput.disabled = true;

    if(this.selectedMenu.length == 1){
      console.log('test');
    }

    // set first item on true to actualize the view
    this.selectedMenu[0].selected= true;
  }
  
  // color for ngIf selected
  getColor() {
		return "#CF2127";
	}

  // color for ngIf !selected
	getColor2() {
		return "#000";
	}
}