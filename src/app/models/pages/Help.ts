import { Utils } from '../../utils/Utils';
import { BaseContent } from './BaseContent';

export class HelpPage {
  content: string;
  instructions: Array<BaseContent>;
  returnPolicy: Array<BaseContent>;
  ordersPolicy: Array<BaseContent>;
  shipmentPolicy: Array<BaseContent>;
  complaints: Array<BaseContent>;

  constructor(data?: JSON) {
    if (data === undefined || data === null) {
      return;
    }

    this.content = Utils.getParam(data, 'content');
    this.instructions = Utils.getParam(data, 'instructions');
    this.returnPolicy = Utils.getParam(data, 'returnPolicy');
    this.ordersPolicy = Utils.getParam(data, 'ordersPolicy');
    this.shipmentPolicy = Utils.getParam(data, 'shipmentPolicy');
    this.complaints = Utils.getParam(data, 'complaints');
  }

  getContent = function() {
    return this.content;
  };

  getInstructions = function() {
    return this.instructions;
  };

  getReturnPolicy = function() {
    return this.returnPolicy;
  };
  
  getOrdersPolicy = function() {
    return this.ordersPolicy;
  };

  getShipmentPolicyule = function() {
    return this.shipmentPolicy;
  };

  getComplaints = function() {
    return this.complaints;
  };

}