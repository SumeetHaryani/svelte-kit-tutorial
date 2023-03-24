<!-- OPtional paramaters -->

<script>
	import { page } from '$app/stores';
	const greetings = {
		en: 'Hello',
		es: 'Hola',
		fr: 'Bonjour',
		de: 'Hallo'
	};
	const { lang = 'en' } = $page.params;
	const greeting = greetings[lang];
</script>

<h1>{greeting}</h1>
