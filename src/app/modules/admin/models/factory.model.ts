// import { Category } from './categories/categories.model';
// import { Subcategory } from './subcategories/subcategories.model';
// import { Availability } from './availabilities/availability.model';
// import { Vizibility } from './vizibilities/vizibility.model';
// import { Campaign } from './campaigns/campaign.model';
// import { Product } from './products/product.model';


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
            // case 'CATEGORY':
            // return new Category(parameters);
            // case 'Subcategory':
            // return new Subcategory(parameters);
            // case 'Availability':
            // return new Availability(parameters);
            // case 'Subcategory':
            // return new Vizibility(parameters);
            // case 'Subcategory':
            // return new Campaign(parameters);
            // case 'Subcategory':
            // return new Product(parameters);
        }
    }
}
