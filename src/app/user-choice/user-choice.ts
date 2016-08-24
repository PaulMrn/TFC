import {Component} from '@angular/core';

@Component({
	selector: 'services',
	styleUrls: ['./user-choice.css'],
	templateUrl: './user-choice.html'
})

export class UserChoice {

	public chosenServices = [];		
	public showStyle: boolean = false;
	public exist: boolean = false;
	public servicesList= [{
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

		var list = JSON.parse(sessionStorage.getItem("menuItems"));

		for (var i = 0; i < list.length; i++) {
			if (list[i] == this.servicesList[index].name) {
				this.servicesList[index].selected = true;
			}
		}

		if (!this.servicesList[index].selected) {
			list.push(this.servicesList[index].name);
			this.servicesList[index].selected = true;

		} else {
			list.splice(this.servicesList[index], 1)
			this.servicesList[index].selected = false;
		}


		sessionStorage.setItem("menuItems", JSON.stringify(list));

		
		console.log(this.servicesList[index].name);
		console.log(list);
		console.log(this.servicesList[index]);
		/*for (var i = 0; i < sessionStorage.length; i++) {
			console.log(sessionStorage.getItem(sessionStorage.key(i)))
		}*/
	}

	getColor() {
		if (this.showStyle) {
			return "#CF2127";
		} else {
			return "";
		}
	}

	getColor2() {
		if (!this.showStyle) {
			return "#000";
		} else {
			return "";
		}
	}
}