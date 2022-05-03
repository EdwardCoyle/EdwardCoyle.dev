<script context="module">
	import InteractiveLogo from '$lib/InteractiveLogo/InteractiveLogo.svelte';

	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1 class="audible">
		EdwardCoyle.dev - Website of the software engineer and motion graphics artist Edward Coyle.
	</h1>
</section>

<InteractiveLogo></InteractiveLogo>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
