import {Component} from '@angular/core';

@Component({
	selector: 'services',
	styleUrls: [],
	templateUrl: './user-choice.html'
})

export class UserChoice {
	public chosenServices = [];
	public servicesList = ['Flight', "Hotel", "Restaurant", "Car", "Delivery", "Interpreter", "VAT", "Hostess"];

	selectedServices(service) {
		if (!localStorage.getItem("menuItems")) {
			localStorage.setItem("menuItems", "[]");
		}
		var list = JSON.parse(localStorage.getItem("menuItems"));
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
		localStorage.setItem("menuItems", JSON.stringify(list));
		for (var i = 0; i < localStorage.length; i++) {
			console.log(localStorage.getItem(localStorage.key(i)))
		}
	}
}