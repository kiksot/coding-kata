import { Entity } from './entity';
import { Item } from './item';
import { ISpecialPrice } from './special';

//TODO active inactive

export interface IOffer {
    id?: string;
    active: boolean;
    displayName: string;
    startDate?: Date;
    duration: number;
    specialPrice: ISpecialPrice;
}

export class Offer extends Entity<IOffer> {
    constructor(props: IOffer) {
        const { id, ...data } = props;
        super(data, id);
        this.setSPecialPriceId(id);
    }

    public static create(props: IOffer): Offer {
        return new Offer(props);
    }

    public get(): IOffer {
        return {
            id: this.id,
            displayName: this.displayName,
            startDate: this.startDate,
            duration: this.duration,
            active: this.isActive,
            specialPrice: this.specialPrice,
        };
    }

    get id(): string {
        return this._id;
    }

    get isActive(): boolean {
        return this.props.active;
    }

    get displayName(): string {
        return this.props.displayName;
    }

    get startDate(): Date {
        return this.props.startDate || new Date();
    }

    get duration(): number {
        return this.props.duration;
    }

    get specialPrice(): ISpecialPrice {
        return this.props.specialPrice;
    }

    setSPecialPriceId(id: string | undefined): void {
        this.props.specialPrice.offerId = this.id;
    }

    public get endDate(): Date {
        const endDate = new Date(this.startDate);
        endDate.setDate(endDate.getDate() + this.duration);
        return endDate;
    }

    public addOfferToItem(items: Item): Item {
        items.setOffer(this.specialPrice);
        return items;
    }
}
