import type { CartProduct } from '$lib/types';

class ShoppingCart {
	cart = $state<Array<CartProduct>>([]);
	total = $state(0);

	addItem = (product: CartProduct) => {
		const existingItem = this.cart.find((item) => item.id === product.id);
		if (!existingItem) {
			this.cart.push(product);
		} else {
			existingItem.quantity += product.quantity;
		}
		const addedTotal = product.price * product.quantity;
		this.total += addedTotal;
	};
	increaseItem = (id: string) => {
		const existingItem = this.cart.find((item) => item.id === id);
		if (!existingItem) return;
		existingItem.quantity += 1;
		this.total += existingItem.price;
	};
	decreaseItem = (id: string) => {
		const existingItem = this.cart.find((item) => item.id === id);
		if (!existingItem) return;
		const multipleItems = existingItem.quantity > 1;

		if (multipleItems) {
			existingItem.quantity -= 1;
		} else {
			this.cart = this.cart.filter((item) => item.id !== id);
		}
		this.total -= existingItem.price;
	};
	removeItem = (id: string) => {
		const existingItem = this.cart.find((item) => item.id === id);
		if (!existingItem) return;
		this.total -= existingItem.price * existingItem.quantity;
		this.cart = this.cart.filter((item) => item.id !== id);
	};
	reset = () => {
		this.cart = [];
		this.total = 0;
	};
}

export const shoppingCart = new ShoppingCart();
