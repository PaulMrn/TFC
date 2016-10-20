import {Component} from '@angular/core';
import {EventApi} from '../sdk/services/custom/Event';

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {

  // store all events
  public events = [];
  // store selected event by user
  public userEvent = [];
  // name of selected event to find it in userEvent
  public eventName = "";

  // enable api
  constructor(private eventApi: EventApi) {

    this.eventApi.find().subscribe(res => {
      this.events = res;
    });

  }

  // on select
  selectedEvent( value ) {
    // get selected event
    this.eventName = value;
    // check and get the coresponding event
    for(var i = 0; i <= this.events.length -1; i++){

      if(this.eventName == this.events[i].name){
        this.userEvent = this.events[i];
      }

    }
    sessionStorage.setItem("selectedEvent", JSON.stringify(this.userEvent));
  }

}