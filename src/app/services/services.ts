import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';

@Component({
  selector: 'services',
  styleUrls: ['./services.css'],
  templateUrl: './services.html'
})

export class Services implements OnInit {

  // all menu item available
  public menu = JSON.parse(sessionStorage.getItem('menuItems'));
  // selected menu item
  public selectedMenu = JSON.parse(sessionStorage.getItem('itemsList'));
  // first item in selectedMenu(top menu) after adding and removing items => to built router-link url
  public clickedService = "";

  // on page init
  ngOnInit() {

    // get the menu
    this.selectedMenu = JSON.parse(sessionStorage.getItem('itemsList'));
    this.selectedMenu[0].selected = true;
  }

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
    if (this.menu[index].selected) {
      this.menu[index].selected = false;
    } else {
      this.menu[index].selected = true;
    }


    // loop for adding and removing items
    for (var j = 0; j < this.selectedMenu.length; j++) {

      // if exist already
      if (this.menu[index].name == this.selectedMenu[j].name && this.selectedMenu.length > 1) {
        this.selectedMenu.splice([j], 1);
      }
      // if not
      if (this.menu[index].selected) {
        this.selectedMenu.push({ name: this.menu[index].name, selected: false });
        break;
      }
    }

    // set first item on true to actualize the view
    this.selectedMenu[0].selected = true;

    if (this.menu[index].name == this.selectedMenu[0].name && this.selectedMenu.length == 1) {
      this.menu[index].selected = true;
    }

    sessionStorage.setItem("menuItems", JSON.stringify(this.menu));
    sessionStorage.setItem("itemsList", JSON.stringify(this.selectedMenu));

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