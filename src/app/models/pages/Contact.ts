import { Utils } from '../../utils/Utils';
import { BaseContent } from './BaseContent';

export class ContactPage {
  content: string;
  contactForm: Array<BaseContent>;
  orderSchedule: Array<BaseContent>;
  serviceSchedule: Array<BaseContent>;
  showroomSchedule: Array<BaseContent>;
  location: Array<BaseContent>;
  maps: Array<BaseContent>;
  

  constructor(data?: JSON) {
    if (data === undefined || data === null) {
      return;
    }

    this.content = Utils.getParam(data, 'content');
    this.contactForm = Utils.getParam(data, 'contactForm');
    this.orderSchedule = Utils.getParam(data, 'orderSchedule');
    this.serviceSchedule = Utils.getParam(data, 'serviceSchedule');
    this.showroomSchedule = Utils.getParam(data, 'showroomSchedule');
    this.location = Utils.getParam(data, 'location');
    this.maps = Utils.getParam(data, 'maps');
  }

  getContent = function() {
    return this.content;
  };

  getContactForm = function() {
    return this.contactForm;
  };

  getOrderSchedule = function() {
    return this.orderSchedule;
  };
  
  getServiceSchedule = function() {
    return this.serviceSchedule;
  };

  getShowroomSchedule = function() {
    return this.showroomSchedule;
  };

  getLocation = function() {
    return this.location;
  };

  getMaps = function() {
    return this.maps;
  };
 

}