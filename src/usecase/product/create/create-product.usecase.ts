import { v4 } from 'uuid';
import Product from "../../../domain/product/entity/product";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import { CreateProductInputDTO, CreateProductOutputDTO } from './create-product.dto';



export default class CreateProductUseCase {

    constructor(private productRepository: ProductRepositoryInterface) { }

    async execute(input: CreateProductInputDTO): Promise<CreateProductOutputDTO> {
        const product = new Product(v4(), input.name, input.price);
        await this.productRepository.create(product);
        return {
            id: product.id,
            name: product.name,
            price: product.price
        }

    }
}