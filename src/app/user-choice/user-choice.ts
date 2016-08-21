import {Component} from '@angular/core';

@Component({
  selector: 'services',
  styleUrls: [],
  templateUrl: './user-choice.html'
})

export class UserChoice {
    public chosenServices = [];
    public servicesList = ['Flight', "Hotel", "Restaurant", "Car", "Delivery", "Interpreter", "VAT", "Hostess"];
    
    selectedServices (service){
        this.chosenServices.push(service);
        localStorage.menuItems = JSON.stringify(this.chosenServices);
    }
}