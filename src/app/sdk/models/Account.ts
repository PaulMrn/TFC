/* tslint:disable */
import {
  Order
} from '../index';

export interface AccountInterface {
  stripe?: string;
  realm?: string;
  username?: string;
  password: string;
  challenges?: any;
  email: string;
  emailVerified?: boolean;
  verificationToken?: string;
  status?: string;
  created?: any;
  lastUpdated?: any;
  id?: number;
  accessTokens?: Array<any>;
  roles?: Array<any>;
  credentials?: Array<any>;
  identities?: Array<any>;
  orders?: Array<Order>;
}

export class Account implements AccountInterface {
  stripe: string;
  realm: string;
  username: string;
  password: string;
  challenges: any;
  email: string;
  emailVerified: boolean;
  verificationToken: string;
  status: string;
  created: any;
  lastUpdated: any;
  id: number;
  accessTokens: Array<any>;
  roles: Array<any>;
  credentials: Array<any>;
  identities: Array<any>;
  orders: Array<Order>;
  constructor(instance?: Account) {
    Object.assign(this, instance);
  }
}
