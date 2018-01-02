import { Utils } from '../../utils/Utils';

export class Page {
    
    id: number;
    website_id: number;
    type: string;
    active: boolean;
    summary: Object;

    constructor(data?: JSON) {
        if (data === undefined || data === null) {
            return;
        }

        this.id = Utils.getParam(data, 'id');
        this.website_id = Utils.getParam(data, 'website_id');
        this.type = Utils.getParam(data, 'type');
        this.active = Utils.getParam(data, 'active');
        this.summary = Utils.getParam(data, 'summary');
    }

    getId = function() {
        return this.id;
    };

    getWebsiteId = function() {
        return this.website_id;
    };

    getType = function() {
        return this.type;
    };

    getActive = function() {
        return this.active;
    };

    getSummary = function() {
        return this.summary;
    };
}