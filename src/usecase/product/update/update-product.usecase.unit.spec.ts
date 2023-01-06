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

        const product = new Product(input.id, "Original description", 1);

        productRepository.find.mockResolvedValue(product);

        const output = await useCase.execute(input);

        expect(input.id).toBe(output.id);
        expect(input.name).toBe(output.name);
        expect(input.price).toBe(output.price);

    })
})