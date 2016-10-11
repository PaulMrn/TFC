/* tslint:disable */

export interface AirbnbInterface {
  id?: number;
}

export class Airbnb implements AirbnbInterface {
  id: number;
  constructor(instance?: Airbnb) {
    Object.assign(this, instance);
  }
}
