import { Utils } from '../../utils/Utils';

export class HomeEcommercePage {
    content: string;

    constructor(data?: JSON) {
        if (data === undefined || data === null) {
            return;
        }

        this.content = Utils.getParam(data, 'content');
    }

    getContent = function() {
        return this.content;
    };
}