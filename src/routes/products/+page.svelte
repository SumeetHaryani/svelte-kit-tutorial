<script>
	// import Product from './product.svelte';
	export let productId = 100;
	export let data;
	const products = data.products;
	const Component = data.Component;
	console.log(data);
</script>

<h1>{data.title}</h1>

<ul>
	<li><a href="/products/1">Product 1</a></li>
	<li><a href="/products/2">Product 2</a></li>
	<li><a href="/products/3">Product 3</a></li>
	<li><a href={`/products/${productId}`}>Product {productId}</a></li>
</ul>

{#each products as product}
	<Component {product} />
{/each}
