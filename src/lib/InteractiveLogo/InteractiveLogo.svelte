<script>
    import anime from 'animejs';
	import MediaQuery from '../utils/MediaQuery.svelte';
    
	import { spinFromPoint, shiftColor } from '../animations.js';

	import SpinningEdLogo from '$lib/EdLogo/SpinningEdLogo.svelte';
	import Triangle from '$lib/Triangle/Triangle.svelte';
	import TriangleCircle from '$lib/TriangleCircle/TriangleCircle.svelte';
	import { onMount } from 'svelte';

	export const prerender = true;

	// Element refs
	let spinningLogo;
	let smallCircle;
	let largeCircle;

	onMount(() => {
        setInterval(() => {
		    spinningLogo.visible = true;
            smallCircle.visible = true;
            largeCircle.visible = true;
        }, 1);
	});
</script>

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

<section id="intro-animation">
	<div class="centered-in-viewport"> 
		<TriangleCircle bind:this={largeCircle} style="large" speed="48s"></TriangleCircle>
	</div>
	<div class="centered-in-viewport">
		<TriangleCircle bind:this={smallCircle} style="small" speed="96s" rotation="right"></TriangleCircle>
	</div>
	<div class="centered-in-viewport">
		<SpinningEdLogo bind:this={spinningLogo} />
	</div>
	<div class="centered-in-viewport">
		<Triangle href="/animation" id="triangle-1" text="Animation"></Triangle>
		<Triangle href="/dev" id="triangle-2" text="Development"></Triangle>
		<Triangle href="/games" id="triangle-3" text="Game Design"></Triangle>
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
