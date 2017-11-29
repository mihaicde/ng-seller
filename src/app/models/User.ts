import { Utils } from '../utils/Utils';

export class User {
  name: string;
  email: string;
  password: string;

  constructor(data?: JSON) {
    if (data === undefined || data === null) {
      throw new Error('Undefined data');
    }

    this.name = Utils.getParam(data, 'name');
    this.email = Utils.getParam(data, 'email');
    this.password = Utils.getParam(data, 'password');
  }

  getName = function() {
    return this.name;
  };

  getEmail = function() {
    return this.email;
  };
}
