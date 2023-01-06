import { Sequelize } from 'sequelize-typescript';
import Product from '../../../domain/product/entity/product';
import ProductModel from '../../../infraestructure/product/repository/sequelize/product.model';
import ProductRepository from '../../../infraestructure/product/repository/sequelize/product.repository';
import UpdateProductUseCase from './update-product.usecase';


describe("Update Product Use Case Integration test", () => {

    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            models: [ProductModel],
            logging: false
        });

        await sequelize.sync();
    })

    afterEach(async () => {
        await sequelize.close();
    });


    it("should update a product", async () => {
        const input = {
            id: "1",
            name: "Product 1",
            price: 10
        }

        const productRepository = new ProductRepository();
        const useCase = new UpdateProductUseCase(productRepository);

        const product = new Product(input.id, "Original description", 1);
        await productRepository.create(product);

        const output = await useCase.execute(input);

        expect(input.id).toBe(output.id);
        expect(input.name).toBe(output.name);
        expect(input.price).toBe(output.price);

    });


});