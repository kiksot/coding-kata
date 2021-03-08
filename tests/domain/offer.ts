import { Item } from '../../src/domain/item';
import { Cart } from '../../src/domain/cart';
import { Offer } from '../../src/domain/offer';

test('Should calculate if the offer is Active', () => {
    // create new offer
    const weekOffer = new Offer({
        displayName: 'Week offer',
        id: 'weekOffer',
        duration: 6,
        active: true,
        specialPrice: {
            quantity: 3,
            price: 120,
        },
    });

    let apple = Item.create({
        displayName: 'Apple',
        price: 50,
    });

    // add offer to apple
    apple = weekOffer.addOfferToItem(apple);

    const banan = Item.create({
        displayName: 'Bananas',
        price: 60,
    });

    const cart = Cart.create({ products: [{ item: apple, quantity: 3 }] });
    cart.add(apple, 5);
    cart.add(banan, 4);

    expect(cart.totalPrice).toBe(580);
});
