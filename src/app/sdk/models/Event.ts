/* tslint:disable */

export interface EventInterface {
  name: string;
  start: any;
  end: any;
  id?: number;
  location?: any;
  address?: Array<any>;
}

export class Event implements EventInterface {
  name: string;
  start: any;
  end: any;
  id: number;
  location: any;
  address: Array<any>;
  constructor(instance?: Event) {
    Object.assign(this, instance);
  }
}
