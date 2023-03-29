import { error, redirect } from '@sveltejs/kit';
export const load = async (loadEvent) => {
	const { fetch, params } = loadEvent;
	const { productId } = params;
	if (productId > 3) {
		// console.log('productId > 3');
		// throw error(404, 'Product not found');
		throw redirect(307, '/products');
	}
	const title = 'Product details';
	const response = await fetch(`http://localhost:3000/products/${productId}`);
	const product = await response.json();
	return {
		title,
		product
	};
};
