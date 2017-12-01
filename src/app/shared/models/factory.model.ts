
import { Tag } from '../../models/Tag';
import { Availability } from '../../models/Availability';
// var category = FactoryModel.getInstance().build(className, parameters);


export class FactoryModel {
    protected static instance = null;
    private className;
    private constructor() {}

    public static getInstance() {
        if (this.instance == null) {
            this.instance = new FactoryModel();
        }

        return this.instance;
    }

    build(className, parameters) {
        switch (className) {
            case 'TAG':
            return new Tag(parameters);
            case 'AVAILABILITY':
            return new Availability(parameters);
        }
    }
}
