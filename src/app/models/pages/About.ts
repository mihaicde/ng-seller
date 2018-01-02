import { Utils } from '../../utils/Utils';

export class AboutPage {
  content: string;
  imageUrl: string;
  

  constructor(data?: JSON) {
    if (data === undefined || data === null) {
      return;
    }

    this.content = Utils.getParam(data, 'content');
    this.imageUrl = Utils.getParam(data, 'imageUrl');
  }

  getContent = function() {
    return this.content;
  };

  getImageUrl = function() {
    return this.imageUrl;
  };

 

}