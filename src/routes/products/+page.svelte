<script>
	export let productId = 100;
</script>

<h1>Product list</h1>
<ul>
	<li><a href="/products/1">Product 1</a></li>
	<li><a href="/products/2">Product 2</a></li>
	<li><a href="/products/3">Product 3</a></li>
	<li><a href={`/products/${productId}`}>Product {productId}</a></li>
</ul>
