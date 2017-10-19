export class BaseModel {
    public _id: string;

    public name: string;

    constructor(params) {
        for (var prop in params) {
            this[prop] = params[prop];
        }
    }
}
