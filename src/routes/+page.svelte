<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	const handleClick = () => {
		goto('/products');
	};
    beforeNavigate((navigation) => {
        console.log('beforeNavigate', navigation);
    });
    afterNavigate((navigation) => {
        console.log('AfterNavigate', navigation);
    });
</script>

<h1>Welcome Home</h1>
<a href="/products">Product</a>
<a href="/profile">profile</a>
<a href="/blog">blog</a>

<button on:click={handleClick}>Place order</button>
