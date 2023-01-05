import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import  {FindProductInputDTO, FindProductOutputDTO } from "./find-product.dto";



export default class FindProductUseCase {

    constructor(private productRepository: ProductRepositoryInterface) { }

    async execute(input: FindProductInputDTO): Promise<FindProductOutputDTO> {
        const product = await this.productRepository.find(input.id);
        return {
            id: product.id,
            name: product.name,
            price: product.price
        }
    }
}