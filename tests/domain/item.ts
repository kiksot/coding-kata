import { Item } from '../../src/domain/item';

test('Should create item', () => {
    const props = {
        id: 'identifier',
        price: 2,
        displayName: 'Apple',
    };
    const item = new Item(props);

    expect(item.id).toBe(props.id);
    expect(item.get()).toEqual(props);
    expect(item.price).toEqual(2);
});

test('Should create item with special price', () => {
    const props = {
        id: 'identifier',
        price: 2,
        displayName: 'Apple',
        offer: {
            quantity: 4,
            price: 6,
        },
    };
    const item = new Item(props);

    expect(item.id).toBe(props.id);
    expect(item.hasOffer()).toEqual(true);
    expect(item.get()).toEqual(props);
    expect(item.price).toEqual(2);
});
