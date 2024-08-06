import { inject, injectable } from "tsyringe";
import { ProductCartRepository } from "../repositories/productCarts.repository";
import { ProductCart } from "../models/productCarts.model";
import { IProductCart } from "../interfaces/productCarts.interface";
import { CartRepository } from "../repositories/carts.repository";
import { ProductRepository } from "../repositories/products.repository";

@injectable()
export class ProductCartServices{
    constructor(@inject(ProductCartRepository) private productCartRepository:ProductCartRepository,
        @inject(CartRepository) private cartRepository: CartRepository,
        @inject(ProductRepository) private productRepository: ProductRepository){
    }

    async getAllProductCarts():Promise<ProductCart[]>{
        return await this.productCartRepository.getAll()
    }

    async getProductCartById(id:string):Promise<ProductCart|null>{
        return await this.productCartRepository.getById(id)
    }

    async createProductCarts({cartId, productId, quantity}:IProductCart):Promise<ProductCart|null>{
        // Validating if the cart actually exists
        const cartData = await this.cartRepository.getById(cartId)
        if(!cartData){
            console.log(`The cart with id ${cartId} does not exists`)
            return null
        }

        // Validating if the product exists
        const productData = await this.productRepository.getById(productId)
        if(!productData){
            console.log(`The product with id ${productId} does not exists`)
            return null
        }

        // Quantity must be positive
        if(quantity < 1){
            console.log("The quantity of the purchase must be positive");
            return null
        }

        // Validating if there is still stock of the product
        if(productData.dataValues.stock < quantity){
            console.log(`There is not enough stock of product with id: ${productId}`)
            return null
        }
        // If the product could be created in the car, then the stock needs to be updated
        await this.productRepository.updateStock(productId, productData.dataValues.stock - quantity)
        // Finally the products are added to the cart
        const productCartData = await this.productCartRepository.create({cartId, productId, quantity})
        if(!productCartData){
            return null
        }

        return productCartData
    }

    async updateProductCart(id:string, productData:IProductCart):Promise<void>{
        return await this.productCartRepository.update(id,productData)
    }

    async deleteProductCart(id:string):Promise<void>{

        // Getting the data of the product cart
        const productCartInfo = await this.productCartRepository.getById(id);
        const productId = productCartInfo?.dataValues.productId
        const quantity = productCartInfo?.dataValues.quantity
        const productData  = await this.productRepository.getById(productId);
        const stock = productData?.dataValues.stock;

        // Updating the stock of the product
        await this.productRepository.updateStock(productId, stock + quantity)

        // Deleting the product in the corresponding cart
        return await this.productCartRepository.destroy(id)
    }
}