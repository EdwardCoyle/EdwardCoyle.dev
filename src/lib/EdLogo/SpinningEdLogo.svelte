<script>
	import { fade } from 'svelte/transition';
	import { spin, shiftColor } from '../animations.js';
	import svg from './EdLogo.svg';

	let visible = true;
</script>

{#if visible}
	<div class="container" in:spin={{ duration: 3000 }} out:fade>
		<svg
			in:shiftColor={{duration: 3000}}
			class="logo"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px" y="0px"
			viewBox="0 0 256 183"
			enable-background="new 0 0 256 183"
			xml:space="preserve">
			<style type="text/css">
				path {
					fill: currentColor;
				}
			</style>
			<path d="M124.8,11c-2.4,3-115.3,153.4-118,157.5C6.1,169.4,6.9,171,8,171c4.8,0,117.4,0,124,0c-3.7-5.8-6.8-13.8-9.1-23
			c-15.2,0-69,0-71.4,0c-1.3,0-2.3-1.8-1.6-2.8c3.2-4.6,18-24.2,21.1-28.3c1.3-1.7,2.4-1.9,3.7-1.9c3.6,0,34.4,0,44,0
			c0-8,1.2-14,2.4-20c-8.8,0-24.1,0-29.7,0c-2.2,0-2.4-1.8-1.4-3.1c3.9-4.9,35.1-47.1,36.3-48.9c1-1.6,2.3-1.5,3.4,0
			c1.2,1.7,4.4,5.1,7.1,9.2c4.2-7.4,7.4-12.5,11.8-19.2c-5-6.6-11.4-14.8-17-22.1C129.7,8.6,126.7,8.5,124.8,11z"/>
			<path d="M251.4,168.2c-4.6-6.8-91.4-120.3-96.6-127c-2.2-2.8-3.4-2.7-5.4,0.5c-27.4,43.9-32.3,89.3-13,126.2c1,1.9,1.8,3,4.6,3
			c0,0,100.4,0,108.4,0C250.7,171,252.2,169.4,251.4,168.2z M207.4,148c-4,0-53.1,0-53.1,0c-1.4,0-1.8-0.7-2.3-1.7
			c-9.7-18.6-8.1-45.8,2.2-68c0.8-1.7,1.6-1.7,2.7-0.3c2.6,3.4,49.2,65,51.5,68.4C208.9,147,208.1,148,207.4,148z"/>
		</svg>
	</div>
{/if}

<div class="controls">
	<label>
		<input type="checkbox" bind:checked={visible} />
		Visible
	</label>
</div>

<style>
	svg {
		fill: var(--text-color);
	}

	.container {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.logo {
		position: absolute;
		transform: translate(-50%, -50%);
		width: 512px;
		height: 512px;
	}

	.controls {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		display: flex;
		justify-content: center;
		margin-block-end: 20px;
	}
</style>
