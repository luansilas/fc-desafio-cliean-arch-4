import Product from "./product";


describe("Product unit tests", () => {


    it("should throw an error when id is undefined", () => {
        expect(() => {
            const product = new Product("", "Product 1", 100);
        }).toThrowError("Id is required");
    })

    it("should throw an error when name is undefined", () => {
        expect(() => {
            new Product("123", "", 100);
        }).toThrowError("Product: Name is required");
    })

  

    it("should throw an error when prive is invalid", () => {
        expect(() => {
            new Product("123", "Product 1", -1);
        }).toThrowError("Product: Price must be greater than 0");
    })

    it("should change name", () => {
        const product = new Product("123", "Product 1", 100);
        product.changeName("Product 2");
        expect(product.name).toBe("Product 2");
    
    })

    it("should change price", () => {
        const product = new Product("123", "Product 1", 100);
        product.changePrice(200);
        expect(product.price).toBe(200);
    
    })

    it("should throw an error when name is empty and price is less than zero", ()=>{
        expect(() => {
            new Product("123", "", -1);
        }).toThrowError("Product: Name is required,Product: Price must be greater than 0");
    })





})