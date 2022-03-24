<script context="module">
	export const prerender = true;
</script>

<script>
	import { flip } from 'svelte/animate';
	import SpinningEdLogo from '$lib/EdLogo/SpinningEdLogo.svelte';
	import TriangleCircle from '$lib/TriangleCircle/TriangleCircle.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section id="intro-animation">
	<div class="centered-in-viewport">
		<SpinningEdLogo />
	</div>
	<div class="centered-in-viewport"> 
		<TriangleCircle style="large" speed="48s"></TriangleCircle>
	</div>
	<div class="centered-in-viewport">
		<TriangleCircle style="small" speed="96s" rotation="right"></TriangleCircle>
	</div>
</section>

<section>
	<h1 class="audible">
		EdwardCoyle.dev - Website of the software engineer and motion graphics artist Edward Coyle.
	</h1>
</section>

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

	/* Screen-reader only */
	.audible {
		position: absolute;
		left: -10000px;
		top: auto;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	.centered-in-viewport {
		display: flex;
		align-content: center;
		justify-content: center;
		justify-items: center;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>
