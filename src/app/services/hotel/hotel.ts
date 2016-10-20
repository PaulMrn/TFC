import { Component } from '@angular/core';
import {HotelApi} from '../../sdk/services/custom/Hotel';

@Component({
  selector: 'hotel',
  templateUrl: './hotel.html',
  styleUrls:['./hotel.css']
})
export default class Hotel { 

  constructor( private hotelApi : HotelApi){
    
    this.hotelApi.find().subscribe(res => {
      console.log(res);
    });

  }

}
