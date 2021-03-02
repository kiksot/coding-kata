import { Entity } from './entity';

export interface IItem {
    id?: string;
    displayName: string;
    price: number;
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
        };
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
}
