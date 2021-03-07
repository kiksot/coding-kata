import { Entity } from './entity';
import { ISpecialPrice } from './special';

export interface IItem {
    id?: string;
    displayName: string;
    price: number;
    offer?: ISpecialPrice;
}

export class Item extends Entity<IItem> {
    constructor(props: IItem) {
        const { id, ...data } = props;
        super(data, id);
    }

    public static create(props: IItem): Item {
        return new Item(props);
    }

    public get(): IItem {
        return {
            id: this.id,
            displayName: this.displayName,
            price: this.price,
            offer: this.offer,
        };
    }

    public hasOffer(): boolean {
        return this.props.offer ? true : false;
    }

    public setOffer(offer: ISpecialPrice): ISpecialPrice {
        this.props.offer = offer;
        return this.props.offer;
    }

    get id(): string {
        return this._id;
    }

    get displayName(): string {
        return this.props.displayName;
    }

    get price(): number {
        return this.props.price;
    }

    get offer(): ISpecialPrice | undefined {
        return this.props.offer;
    }
}
