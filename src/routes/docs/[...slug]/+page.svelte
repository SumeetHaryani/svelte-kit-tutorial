<!-- will match any url that contains doc segment in url -->

<script>
	import { page } from '$app/stores';

	const slugArr = $page.params.slug.split('/');
</script>

{#if slugArr.length === 1}
	<h1>Viewing docs for feature {slugArr[0]}</h1>
{:else if slugArr.length === 2}
	<h1>Viewing docs for feature {slugArr[0]} and sub-feature {slugArr[1]}</h1>
{/if}
