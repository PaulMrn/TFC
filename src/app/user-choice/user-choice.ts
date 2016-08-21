import {Component} from '@angular/core';

@Component({
  selector: 'services',
  styleUrls: [],
  templateUrl: './user-choice.html'
})

export class UserChoice {
    public chosenServices = [];
    public servicesList = ['Flight', "Hotel", "Restaurant", "Transfer & Car", "Delivery", "Interpreter", "VAT Recovery", "Host & Hostess"];
    
    selectedServices (service){
        this.chosenServices.push(service);
        alert(service + 'selected')
    }
}