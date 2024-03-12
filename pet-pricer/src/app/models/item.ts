import { Price } from "./price";

export class Item {
    name: String;
    image: String;
    price: Price;
    slug: String;

    constructor(){
        this.name="";
        this.image="";
        this.price = new Price;
        this.slug="";
    }
}
