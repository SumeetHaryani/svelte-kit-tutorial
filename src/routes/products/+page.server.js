export const load = async (serverLoadEvent) => {
    console.log('load fn in src/routes/products/+page.server.js');
	const { fetch } = serverLoadEvent;
	const title = 'List of available products';
	const response = await fetch('http://localhost:3000/products');
	const products = await response.json();
	return {
		title,
		products
	};
};
