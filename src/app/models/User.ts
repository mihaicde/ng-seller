import { Utils } from '../utils/Utils';

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;

  constructor(data?: JSON) {
    if (data === undefined || data === null) {
      throw new Error('Undefined data');
    }

    this.id = Utils.getParam(data, 'id');
    this.name = Utils.getParam(data, 'name');
    this.email = Utils.getParam(data, 'email');
    this.password = Utils.getParam(data, 'password');
    this.role = Utils.getParam(data, 'role');
  }

  getId = function() {
    return this.id;
  };

  getName = function() {
    return this.name;
  };

  getEmail = function() {
    return this.email;
  };

  getRole = function() {
    return this.role;
  };
}
