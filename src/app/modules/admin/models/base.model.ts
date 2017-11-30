export class BaseModel {
    public _id: string;

    public name: string;

    constructor(params) {
        for (let prop in params) {
            this[prop] = params[prop];
        }
    }
}
