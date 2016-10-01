import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'services',
	styleUrls: ['./user-choice.css'],
	templateUrl: './user-choice.html'
})

export class UserChoice implements OnInit{
  ngOnInit() {
	  
	if (!sessionStorage.getItem("menuItems")) {
		sessionStorage.setItem("menuItems", "[]");
	}
	if (!sessionStorage.getItem("itemsList")) {
		sessionStorage.setItem("itemsList", "[]");
	}
	
    this.nextMenu = JSON.parse(sessionStorage.getItem('itemsList'));
	this.servicesList = JSON.parse(sessionStorage.getItem('menuItems'));
	this.firstItem = this.nextMenu[0].name.toLowerCase();

  }

	// first item in nextMenu to built router-link url
	public firstItem = "";
	// empty array to store selected menu item
	public nextMenu = [];
	// all menu item available
	public servicesList = [
		{
		name: "Flight",
		selected: false,
		},
		{
			name: "Hotel",
			selected: false,
		},
		{
			name: "Restaurant",
			selected: false,
		},
		{
			name: "Car",
			selected: false,
		},
		{
			name: "Delivery",
			selected: false,
		},
		{
			name: "Interpreter",
			selected: false,
		},
		{
			name: "VAT",
			selected: false,
		},
		{
			name: "Hostess",
			selected: false,
		}]

	// on click on available menu item
	selectedServices(service, index) {

		// set sessionStorage
		if (!sessionStorage.getItem("menuItems")) {
			sessionStorage.setItem("menuItems", "[]");
		}
		if (!sessionStorage.getItem("itemsList")) {
			sessionStorage.setItem("itemsList", "[]");
		}

		var list = JSON.parse(sessionStorage.getItem("menuItems"));

		// store clicked element
		var clickedElement = this.servicesList[index].name;
		// empty index to store index of clickedElement
		var indexOfClickedElement = -1;

		// loop in nextMenu to get index of clickedElement(servicesList) equivalent in nextMenu
		for(var i = 0; i < this.nextMenu.length; i++){
			if(this.nextMenu[i].name === clickedElement){
				indexOfClickedElement = i;
				break;
			}
		}

		// set true if item is already stored
		for (var i = 0; i < list.length; i++) {
			if (list[i] == this.servicesList[index].name) {
				this.servicesList[index].selected = true;
			}
		}

		// actualize selected values and splice and push item
		if (!this.servicesList[index].selected) {
			list.push(this.servicesList[index].name);
			this.nextMenu.push({ name: list[list.length -1], selected: false })
			this.servicesList[index].selected = true;
		} else {
			list.splice(list.indexOf(this.servicesList[index].name), 1);
			this.nextMenu.splice(indexOfClickedElement, 1);
			this.servicesList[index].selected = false;
		}

		// set firstItem value
		if(this.nextMenu.length == 0){

		} else {
			this.firstItem = this.nextMenu[0].name.toLowerCase();
		}

		// store change in sessionStorage
		sessionStorage.setItem("menuItems", JSON.stringify(this.servicesList));
		sessionStorage.setItem("itemsList", JSON.stringify(this.nextMenu));
		console.log(this.firstItem);
	}
	
	// get color for selected view
	getColor() {
		return "#CF2127";
	}

	// get color for !selected view
	getColor2() {
		return "#000";
	}

}