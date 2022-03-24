<script>
	import largeSvg from './triangle-circle-large.svg';
    import smallSvg from './triangle-circle-small.svg';
    
    export let style = 'large' // 'small'
    export let rotation = 'left';
    export let speed = '48s' // '96s'

    $: animationName = `spin-${rotation}`;
    $: animationSpeed = speed;

    // Converts JS variables into CSS Variables
    function cssVariables(node, variables) {
		setCssVariables(node, variables);
		
		return {
			update(variables) {
				setCssVariables(node, variables);
			}
		}
	}
	function setCssVariables(node, variables) {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name]);
		}
	}
</script>

<img 
    class="triangle-circle spin-{rotation}"
    src={style === 'large' ? largeSvg : smallSvg} 
    alt="Triangle Circle {style === 'large' ? "Large" : "Small"}"
    use:cssVariables={{animationName, animationSpeed}} />

<style>
    .spin-right {
        -webkit-animation: spin-right var(--animationSpeed) linear infinite;
        -moz-animation: spin-right var(--animationSpeed) linear infinite;
        animation: spin-right var(--animationSpeed) linear infinite;
    }

    .spin-left {
        -webkit-animation: spin-left var(--animationSpeed) linear infinite;
        -moz-animation: spin-left var(--animationSpeed) linear infinite;
        animation: spin-left var(--animationSpeed) linear infinite;
    }

    /* Spinning Clockwise (right) */
    /* // =================================================== */
    @-moz-keyframes spin-right {
    0% {
        -moz-transform: rotateZ(0deg);
    }
    100% {
        -moz-transform: rotateZ(360deg);
    }
    }
    @-webkit-keyframes spin-right {
    0% {
        -webkit-transform: rotateZ(0deg);
    }
    100% {
        -webkit-transform: rotateZ(360deg);
    }
    }
    @keyframes spin-right {
    0% {
        -webkit-transform: rotateZ(0deg);
        transform: rotateZ(0deg);
    }
    100% {
        -webkit-transform: rotateZ(360deg);
        transform: rotateZ(360deg);
    }
    }

    /* Spinning Counter-Clockwise (left) */
    /* // =================================================== */
    @-moz-keyframes spin-left {
    0% {
        -moz-transform: rotateY(180deg) rotateZ(0deg);
    }
    100% {
        -moz-transform: rotateY(180deg) rotateZ(360deg);
    }
    }
    @-webkit-keyframes spin-left {
    0% {
        -webkit-transform: rotateY(180deg) rotateZ(0deg);
    }
    100% {
        -webkit-transform: rotateY(180deg) rotateZ(360deg);
    }
    }
    @keyframes spin-left {
    0% {
        -webkit-transform: rotateY(180deg) rotateZ(0deg);
        transform: rotateY(180deg) rotateZ(0deg);
    }
    100% {
        -webkit-transform: rotateY(180deg) rotateZ(360deg);
        transform: rotateY(180deg) rotateZ(360deg);
    }
    }
</style>