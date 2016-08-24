import {Component} from '@angular/core';

@Component({
	selector: 'services',
	styleUrls: ['./user-choice.css'],
	templateUrl: './user-choice.html'
})

export class UserChoice {
	public chosenServices = [];
	public servicesList = ['Flight', "Hotel", "Restaurant", "Car", "Delivery", "Interpreter", "VAT", "Hostess"];
	public showStyle: boolean = false;
	public exist: boolean = false;

	selectedServices(service, index) {

		if (!sessionStorage.getItem("menuItems")) {
			sessionStorage.setItem("menuItems", "[]");
		}

		var list = JSON.parse(sessionStorage.getItem("menuItems"));
		var index = list.indexOf(service);

		for (var i = 0; i < list.length; i++) {
			if (list[i] == service) {
				this.exist = true;
			}
		}

		if (!this.exist) {
			list.push(service);
			this.exist = true;
		}
		else {
			list.splice(index, 1)
			this.exist = false;
		}


		sessionStorage.setItem("menuItems", JSON.stringify(list));

		console.log(this.exist);

		/*for (var i = 0; i < sessionStorage.length; i++) {
			console.log(sessionStorage.getItem(sessionStorage.key(i)))
		}*/
	}

	getStyle() {
		if (this.showStyle) {
			return "#CF2127";
		} else {
			return "";
		}
	}
}