import {Component} from '@angular/core';

@Component({
	selector: 'services',
	styleUrls: ['./user-choice.css'],
	templateUrl: './user-choice.html'
})

export class UserChoice {
	public chosenServices = [];
	public servicesList = ['Flight', "Hotel", "Restaurant", "Car", "Delivery", "Interpreter", "VAT", "Hostess"];

	selectedServices(service) {
		if (!sessionStorage.getItem("menuItems")) {
			sessionStorage.setItem("menuItems", "[]");
		}

		var list = JSON.parse(sessionStorage.getItem("menuItems"));
		var exist = false;

		for (var i = 0; i < list.length; i++) {
			if (list[i] == service) {
				exist = true;
			}
		}

		if (!exist) {
			list.push(service);
		}
		else {

		}

		sessionStorage.setItem("menuItems", JSON.stringify(list));

		/*for (var i = 0; i < sessionStorage.length; i++) {
			console.log(sessionStorage.getItem(sessionStorage.key(i)))
		}*/
	}
}