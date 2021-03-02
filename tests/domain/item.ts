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
