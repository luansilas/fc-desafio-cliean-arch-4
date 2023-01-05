export interface ListProductsInputDTO {};

interface ProductOutputDTO {
    id: string;
    name: string;
    price: number;
};

export interface ProductsOutputDTO {
    products: ProductOutputDTO[];
}