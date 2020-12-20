const express = require('express');

const ProductsRepo = require('../repositories/products');
const CartsRepo = require('../repositories/carts');
const cartShowTemplate = require('../views/carts/show');

const router = express.Router();

router.post('/cart/products', async (req, res) => {
	let cart;
	if (!req.session.cartId) {
		cart = await CartsRepo.create({ items: [] });
		req.session.cartId = cart.id;
	} else {
		cart = await CartsRepo.getOne(req.session.cartId);
	}
	const existingItem = cart.items.find(
		(item) => item.id === req.body.productId
	);
	if (existingItem) {
		existingItem.quantity++;
	} else {
		cart.items.push({ id: req.body.productId, quantity: 1 });
	}
	await CartsRepo.update(cart.id, { items: cart.items });

	res.redirect('/cart');
});

router.get('/cart', async (req, res) => {
	if (!req.session.cartId) {
		return res.redirect('/');
	}
	const cart = await CartsRepo.getOne(req.session.cartId);
	for (let item of cart.items) {
		const product = await ProductsRepo.getOne(item.id);
		item.product = product;
	}
	res.send(cartShowTemplate({ items: cart.items }));
});

router.post('/cart/products/delete', async (req, res) => {
	const { itemId } = req.body;
	const cart = await CartsRepo.getOne(req.session.cartId);

	const items = cart.items.filter((item) => item.id !== itemId);
	await CartsRepo.update(req.session.cartId, { items });

	res.redirect('/cart');
});

module.exports = router;
