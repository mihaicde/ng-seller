import { Utils } from '../../utils/Utils';

export class BaseContent {
    
    active: boolean;
    content: string;

    constructor(data?: JSON) {
        if (data === undefined || data === null) {
            return;
        }

        this.active = Utils.getParam(data, 'active');
        this.content = Utils.getParam(data, 'content');
    }

    getActive = function() {
        return this.active;
    };

    getContent = function() {
        return this.content;
    };
}