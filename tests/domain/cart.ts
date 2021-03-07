import { Item } from '../../src/domain/item';
import { Cart } from '../../src/domain/cart';

const itemProps = {
    price: 2,
    displayName: 'Apple',
};

test('Should create cart', () => {
    const item = new Item(itemProps);
    const product = { item, quantity: 2 };
    const cart = new Cart({
        products: [product],
    });
    expect(cart.totalPrice).toBe(4);
});

test('Should add product without dublicates', () => {
    const item = new Item(itemProps);
    const product = { item, quantity: 5 };
    const cart = new Cart({
        products: [product],
    });

    cart.add(item, 2);
    expect(cart.products.length).toBe(1);
    expect(cart.totalPrice).toBe(14);
});
