/* tslint:disable */
import {
  Event
} from '../index';

export interface HotelInterface {
  name: string;
  description: string;
  minPrice: number;
  maxPrice: number;
  ranking: number;
  show?: boolean;
  picture: string;
  id?: number;
  location?: any;
  properties?: any;
  disponibilities?: Array<any>;
  address?: Array<any>;
  property?: Array<any>;
  events?: Array<Event>;
}

export class Hotel implements HotelInterface {
  name: string;
  description: string;
  minPrice: number;
  maxPrice: number;
  ranking: number;
  show: boolean;
  picture: string;
  id: number;
  location: any;
  properties: any;
  disponibilities: Array<any>;
  address: Array<any>;
  property: Array<any>;
  events: Array<Event>;
  constructor(instance?: Hotel) {
    Object.assign(this, instance);
  }
}
