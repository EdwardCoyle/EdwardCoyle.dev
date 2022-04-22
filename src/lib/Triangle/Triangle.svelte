<script>
    export let id = '';
    export let visible = true;
    export let size = 64;

    $: sizePx = `${size}px`;
    $: hiddenClass = visible ? '' : ' hidden';
</script>

<style>
    .triangle {
        color: inherit;
        position: absolute;
        transition: width 200ms ease-in-out, height 200ms ease-in-out;
        transform-origin: center;
        width: var(--size);
        height: var(--size);
    }

    .triangle:hover {
        height: calc(var(--size) * 2);
        width: calc(var(--size) * 2);
    }

    #triangle-1 {
        transform: translate3d(0, -225px, 0);
    }

    #triangle-2 {
        transform: translate3d(-275px, 200px, 0);
    }

    #triangle-3 {
        transform: translate3d(275px, 200px, 0);
    }
</style>

<svg 
    id={id} 
    class="triangle{hiddenClass}"
    style="--size: {sizePx}"
    viewBox="0 0 {size} {size}">
        <path d="M31.1,5.8c0.4-0.7,1.3-0.7,1.7,0L48,32.2l15.1,26.3c0.4,0.7-0.1,1.5-0.9,1.5H32H1.7c-0.8,0-1.3-0.8-0.9-1.5L16,32.2
    L31.1,5.8z"/>
</svg>