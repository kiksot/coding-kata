import { Item } from '../../src/domain/item';
import { Cart } from '../../src/domain/cart';

test('Should create cart', () => {
    const itemProps = {
        price: 2,
        displayName: 'Apple',
    };
    const item = new Item(itemProps);
    const product = { item, quantity: 2 };
    const cart = new Cart({
        products: [product],
    });
    expect(cart.totalPrice).toBe(4);
});
