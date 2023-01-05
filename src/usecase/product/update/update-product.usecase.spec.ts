import Product from "../../../domain/product/entity/product";
import UpdateProductUseCase from "./update-product.usecase";

const MockProductRepository = () => ({
    create: jest.fn(),
    find: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
});

describe("Update Product Use Case test", () => {

    it("should update a product", async () => {
        const input = {
            id: "1",
            name: "Product 1",
            price: 10
        }

        const productRepository = MockProductRepository();
        const useCase = new UpdateProductUseCase(productRepository);

        const product = new Product(input.id, input.name, input.price);

        productRepository.find.mockResolvedValue(product);

        const output = await useCase.execute(input);

        expect(output.id).toBe(product.id);
        expect(output.name).toBe(product.name);
        expect(output.price).toBe(product.price);

    })
})