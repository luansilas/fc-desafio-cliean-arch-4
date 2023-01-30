import AbstractEntity from "../../@shared/entity/entity.abstract";
import NotificationError from "../../@shared/notification/notification.error";
import ProductInterface from "./product.interface";

export default class Product extends AbstractEntity implements ProductInterface{

    // private _id: string = "";
    private _name: string = "";
    private _price: number = 0;

    constructor(id: string, name: string, price: number) {
        super();
        this._id = id;
        this._name = name;
        this._price = price;

        this.validate();
        if(this.notification.hasErrors()){
            throw new NotificationError(this.notification.errors);
        }
    }

    validate(){


        if (this._id.length === 0) {
            this.notification.addError({
                context: "Product",
                message: "Id is required"
            })
            // throw new Error("Id is required");
        }

        if (this._name.length === 0) {
            this.notification.addError({
                context: "Product",
                message: "Name is required"
            })
            // throw new Error("Name is required");
        }

        if(this._price <= 0){
            this.notification.addError({
                context: "Product",
                message: "Price must be greater than 0"
            })
            // throw new Error("Price must be greater than 0");
        }
        
        // return true;
      

       
    }

    get id() {
        return this._id;
    }
    
    changePrice(price: number) {
        this._price = price;
        this.validate();
    }

    get price() {
        return this._price;
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    get name() {
        return this._name;
    }

    // get id(): string {
    //     return this._id;
    // }

    // get name(): string {
    //     return this._name;
    // }

    // get price(): number {
    //     return this._price;
    // }

    // set name(value: string) {
    //     this._name = value;
    // }

    // set price(value: number) {
    //     this._price = value;
    // }

}