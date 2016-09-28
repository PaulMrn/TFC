import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';

@Component({
  selector: 'services',
  styleUrls: ['./services.css'],
  templateUrl: './services.html'
})

export class Services{

  public menu = JSON.parse(sessionStorage.getItem('menuItems'));
  public selectedMenu = JSON.parse(sessionStorage.getItem('itemsList'));

   currentService(item, index) {

    for (var j = 0; j < this.selectedMenu.length; j++) {  
      this.selectedMenu[j].selected = false;
		}
      this.selectedMenu[index].selected = true;
    }

  selectionSystem(service, index) {
    console.log(this.selectedMenu.length);
    console.log(this.selectedMenu);
    
    if(this.menu[index].selected){
      this.menu[index].selected = false;
    } else {
      this.menu[index].selected = true;
    }  
    for(var j = 0; j < this.selectedMenu.length; j++){
      if(this.menu[index].name == this.selectedMenu[j].name){
        this.selectedMenu.splice([j], 1);
        console.log('test');
      }
      if (this.menu[index].selected){
        this.selectedMenu.push({ name: this.menu[index].name, selected: false });
        break;
      }
    }
    /*if(this.selectedMenu.lenght == 0){
      this.selectedMenu.push({ name: this.menu[index].name, selected: false });
    }*/
    this.selectedMenu[0].selected= true;
  }
  getColor() {
		return "#CF2127";
	}

	getColor2() {
		return "#000";
	}

  dropdownHeight(){
    return "420px";
  }
  
}