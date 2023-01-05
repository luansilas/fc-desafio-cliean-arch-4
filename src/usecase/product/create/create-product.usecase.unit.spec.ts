import Product from "../../../domain/product/entity/product";
import CreateProductUseCase from "./create-product.usecase";

const MockProductRepository = ()=>{
    return {
        create: jest.fn(),
        find: jest.fn(),
        findAll: jest.fn(),
        update: jest.fn(),
    }
}


describe("Create Product Use Case test", () => {

    it("should create a product", async () => {
        const input = {
            name: "Product 1",
            price: 10
        }

        const productRepository = MockProductRepository();
        const useCase = new CreateProductUseCase(productRepository);


        
        const output = await useCase.execute(input);

        expect(output.id).toBeDefined();
        expect(output.name).toBe(input.name);
        expect(output.price).toBe(input.price);
    })

    it("should throw a error when name is missing", async () => {
        const input = {
            name: "",
            price: 10
        }

        const productRepository = MockProductRepository();
        const useCase = new CreateProductUseCase(productRepository);

        await expect(async ()=> useCase.execute(input)).rejects.toThrowError("Name is required");
    })


    it("should throw a error when price less than zero", async () => {
        const input = {
            name: "Product 1",
            price: -10
        }

        const productRepository = MockProductRepository();
        const useCase = new CreateProductUseCase(productRepository);

        await expect(async ()=> useCase.execute(input)).rejects.toThrowError("Price must be greater than 0");
    })

})