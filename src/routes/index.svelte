<script context="module">
	export const prerender = true;
	
    import anime from 'animejs';
	import MediaQuery from '../lib/utils/MediaQuery.svelte';
</script>

<script>
	import SpinningEdLogo from '$lib/EdLogo/SpinningEdLogo.svelte';
	import Triangle from '$lib/Triangle/Triangle.svelte';
	import TriangleCircle from '$lib/TriangleCircle/TriangleCircle.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!--
	Writes some styles based on media query conditions
-->
<MediaQuery query="(orientation: landscape)" let:matches>
	{#if matches}
	<style id="media">
		.centered-in-viewport {
			align-items: center;
		}
	</style>
	{:else}
	<style id="media">
		.centered-in-viewport {
			align-items: normal;
		}
	</style>
	{/if}
</MediaQuery>

<section>
	<h1 class="audible">
		EdwardCoyle.dev - Website of the software engineer and motion graphics artist Edward Coyle.
	</h1>
</section>

<section id="intro-animation">
	<div class="centered-in-viewport"> 
		<TriangleCircle style="large" speed="48s"></TriangleCircle>
	</div>
	<div class="centered-in-viewport">
		<TriangleCircle style="small" speed="96s" rotation="right"></TriangleCircle>
	</div>
	<div class="centered-in-viewport">
		<SpinningEdLogo />
	</div>
	<div class="centered-in-viewport">
		<Triangle id="triangle-1" text="Animation"></Triangle>
		<Triangle id="triangle-2" text="Development"></Triangle>
		<Triangle id="triangle-3" text="Game Design"></Triangle>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	#intro-animation {
		position: absolute;
		overflow: hidden;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
	}

	h1 {
		width: 100%;
	}

	.centered-in-viewport {
		display: flex;
		justify-content: center;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		/* overflow: hidden; */
	}
</style>
