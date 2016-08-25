import {Component} from '@angular/core';

@Component({
	selector: 'services',
	styleUrls: ['./user-choice.css'],
	templateUrl: './user-choice.html'
})

export class UserChoice {

	public nextMenu = [];
	public servicesList = [{
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

	selectedServices(service, index) {

		if (!sessionStorage.getItem("menuItems")) {
			sessionStorage.setItem("menuItems", "[]");
		}
		if (!sessionStorage.getItem("itemsList")) {
			sessionStorage.setItem("itemsList", "[]");
		}

		var list = JSON.parse(sessionStorage.getItem("menuItems"));

		for (var i = 0; i < list.length; i++) {
			if (list[i] == this.servicesList[index].name) {
				this.servicesList[index].selected = true;
			}
		}

		if (!this.servicesList[index].selected) {
			list.push(this.servicesList[index].name);
			this.nextMenu.push({ name: list[list.length -1], selected: false })
			this.servicesList[index].selected = true;
		} else {
			list.splice(list.indexOf(this.servicesList[index].name), 1);
			this.nextMenu.splice(this.nextMenu.indexOf(this.nextMenu), 1);
			this.servicesList[index].selected = false;
		}

		sessionStorage.setItem("menuItems", JSON.stringify(this.servicesList));
		sessionStorage.setItem("itemsList", JSON.stringify(this.nextMenu));
		
		console.log(this.nextMenu);	
	}
	
	getColor() {
		return "#CF2127";
	}

	getColor2() {
		return "#000";
	}
}