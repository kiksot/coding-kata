import { CartItem } from './cart';

export interface ISpecialPrice {
    quantity: number;
    price: number;
}

export class SpecialPrice implements ISpecialPrice {
    quantity: number;
    price: number;
    constructor(model: { quantity: number; price: number }) {
        this.quantity = model.quantity;
        this.price = model.price;
    }

    public getPrice(product: CartItem) {
        const usualPrice = product.item.price;
        const numberOffers =
            this.quantity > 0
                ? Math.trunc(product.quantity / this.quantity)
                : 0;
        const numberOfferProducts = numberOffers * this.quantity;
        const numberProductsWithoutOffer =
            product.quantity - numberOfferProducts;
        return (
            numberProductsWithoutOffer * usualPrice +
            numberOffers *
                (this.price > 0 ? this.price : usualPrice * this.quantity)
        );
    }
}
