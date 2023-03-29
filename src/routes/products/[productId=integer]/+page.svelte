<script>
	import { page } from '$app/stores';
	export let data;
	const productId = $page.params.productId;
	const title = data.title;
	const product = data.product;
</script>
<h1>{title}</h1>
<div>
	<h2>{product.title} - {product.price}</h2>
	<p>
		{product.description}
	</p>
</div>
