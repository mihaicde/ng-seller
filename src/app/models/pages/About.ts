import { Utils } from '../../utils/Utils';

export class AboutPage {
  active: boolean;
  content: string;
  imageUrl: string;
  

  constructor(data?: JSON) {
    if (data === undefined || data === null) {
      return;
    }

    this.active = Utils.getParam(data, 'active');
    this.content = Utils.getParam(data, 'content');
    this.imageUrl = Utils.getParam(data, 'imageUrl');
  }

  getActive = function() {
    return this.active;
  };

  getContent = function() {
    return this.content;
  };

  getImageUrl = function() {
    return this.imageUrl;
  };

 

}