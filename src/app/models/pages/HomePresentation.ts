import { Utils } from '../../utils/Utils';

export class HomePresentationPage {
  active: boolean;
  title: string;
  imageUrl: string;
  iconLeft: string;
  iconMiddle: string;
  iconRight: string;


  constructor(data?: JSON) {
    if (data === undefined || data === null) {
      return;
    }

    this.active = Utils.getParam(data, 'active');
    this.title = Utils.getParam(data, 'title');
    this.imageUrl = Utils.getParam(data, 'imageUrl');
    this.iconLeft = Utils.getParam(data, 'iconLeft');
    this.iconMiddle = Utils.getParam(data, 'iconMiddle');
    this.iconRight = Utils.getParam(data, 'iconRight');
  }

  getActive = function() {
    return this.active;
  };

  getTitle = function() {
    return this.title;
  };

  getImageUrl = function() {
    return this.imageUrl;
  };

  getIconLeft = function() {
    return this.iconLeft;
  };

  getIconMiddle = function() {
    return this.iconMiddle;
  };

  getIconRight = function() {
    return this.iconRight;
  };

}