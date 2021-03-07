import { Entity } from './entity';
import { Item } from './item';
import { SpecialPrice } from './special';

export interface CartItem {
    item: Item;
    quantity: number;
}

export interface ICartProps {
    id?: string;
    products: CartItem[];
}

export class Cart extends Entity<ICartProps> {
    constructor({ id, ...data }: ICartProps) {
        super(data, id);
    }

    public static create(props: ICartProps): Cart {
        const instance = new Cart(props);

        if (instance.products) {
            const products = instance.products.map((product) => ({
                item: product.item,
                quantity: product.quantity,
            }));

            instance.setProducts(products);
        }

        return instance;
    }

    private setProducts(products: CartItem[]) {
        this.props.products = products;
    }

    get id(): string {
        return this._id;
    }

    get products(): CartItem[] {
        return this.props.products;
    }

    public totalPrice(activeOffersId: string[]): number {
        const sum = (acc: number, product: CartItem) => {
            return product.item.offer &&
                activeOffersId.find(
                    (offerId) => offerId === product.item.offer?.offerId,
                )
                ? acc + new SpecialPrice(product.item.offer).getPrice(product)
                : acc + product.item.price * product.quantity;
        };
        return this.products.reduce(sum, 0);
    }

    public add(item: Item, quantity: number): void {
        const products = this.products;
        const index = this.products.findIndex(
            (product) => product.item.id === item.id,
        );

        if (index > -1) {
            products[index].quantity = products[index].quantity + quantity;

            return this.setProducts(products);
        }

        products.push({ item, quantity });
        this.setProducts(products);
    }

    public remove(itemId: string): void {
        const products = this.products.filter(
            (product) => product.item.id !== itemId,
        );
        this.setProducts(products);
    }

    public empty(): void {
        this.setProducts([]);
    }
}
