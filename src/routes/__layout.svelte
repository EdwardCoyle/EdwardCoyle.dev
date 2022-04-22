<script>
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		box-sizing: border-box;
		display: flex;
		flex: 1;
		flex-direction: column;
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: 0;
	}
</style>
