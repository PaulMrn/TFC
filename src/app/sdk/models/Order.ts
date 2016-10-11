/* tslint:disable */

export interface OrderInterface {
  created?: any;
  status?: string;
  price?: number;
  id?: number;
  accountId?: number;
  account?: any;
  reservations?: Array<any>;
}

export class Order implements OrderInterface {
  created: any;
  status: string;
  price: number;
  id: number;
  accountId: number;
  account: any;
  reservations: Array<any>;
  constructor(instance?: Order) {
    Object.assign(this, instance);
  }
}
