import { SpecialPrice } from '../../src/domain/special';
import { Item } from '../../src/domain/item';

test('Should calculate with SpecialPrice', () => {
    // special price for product 3 for 120
    const specialPrice = new SpecialPrice({ quantity: 3, price: 120 });
    const product = {
        item: new Item({ price: 50, displayName: 'Apple' }),
        quantity: 5,
    };

    const finalPrice = specialPrice.getPrice(product);

    expect(finalPrice).toEqual(220);
});

test('Should calculate without SpecialPrice', () => {
    // special price for product 3 for 120
    const specialPrice = new SpecialPrice({ quantity: 3, price: 120 });

    const product = {
        item: new Item({ price: 50, displayName: 'Apple' }),
        quantity: 2,
    };

    const finalPrice = specialPrice.getPrice(product);

    expect(finalPrice).toEqual(100);
});

test('Should calculate SpecialPrice with 0 quantity (wrong case)', () => {
    const specialPrice = new SpecialPrice({ quantity: 0, price: 120 });

    const product = {
        item: new Item({ price: 50, displayName: 'Apple' }),
        quantity: 2,
    };

    const finalPrice = specialPrice.getPrice(product);

    expect(finalPrice).toEqual(100);
});

test('Should calculate SpecialPrice with 0 price (wrong case)', () => {
    const specialPrice = new SpecialPrice({ quantity: 3, price: 0 });

    const product = {
        item: new Item({ price: 50, displayName: 'Apple' }),
        quantity: 3,
    };

    const finalPrice = specialPrice.getPrice(product);

    expect(finalPrice).toEqual(150);
});
