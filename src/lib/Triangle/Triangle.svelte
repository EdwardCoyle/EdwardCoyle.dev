<script>
    export let id = '';
    export let visible = true;
    export let size = 64;
    export let text = '';
    export let hoverColor = 'var(--accent-color)';

    $: bgColor = active ? hoverColor : 'var(--text-color)';
    $: sizePx = `${size}px`;
    $: hiddenClass = visible ? '' : ' hidden';

    let active = false;
    let button;

    const toggleActive = (e) => {
        console.log(`Activation Event Fired: "${e.type}"`);
        switch (e.type) {
            case 'mouseenter':
            case 'focusin':
                active = true;
                button.classList.add('active');
                break;
            default:
                active = false;
                button.classList.remove('active');
                break;
        }
    }
</script>

<style>
    button {
        background: transparent;
        border: none;
        color: inherit;
        cursor: pointer;
        display: inline-block;
        position: absolute;
        transition: 
            width 200ms ease-in-out,
            height 200ms ease-in-out;
        transform-origin: center;
    }

    svg {
        color: inherit;
        width: var(--size);
        height: var(--size);

        transform: rotate(0) scale(1);

        transition: 
            fill 200ms cubic-bezier(0.65,0.05,0.36,1),
            height 200ms cubic-bezier(0.65,0.05,0.36,1),
            transform 200ms cubic-bezier(0.65,0.05,0.36,1),
            width 200ms cubic-bezier(0.65,0.05,0.36,1);
    }

    /* Hover State */
    button.active svg {
        height: calc(var(--size) * 2);
        width: calc(var(--size) * 2);
        transform: rotate(360deg) scale(1.4);
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

<button
    bind:this={button}
    id={id} 
    class="{hiddenClass}"
    on:mouseenter={toggleActive}
    on:mouseleave={toggleActive}
    on:focusin={toggleActive}
    on:focusout={toggleActive}>
    <span class="label audible">{text}</span>
    <svg
        role="presentation"
        style="--size: {sizePx}; --fill: {bgColor}"
        viewBox="0 0 {size} {size}">
        <style type="text/css">
            path {
                fill: var(--fill);
            }
		</style>
        <path d="M31.1,5.8c0.4-0.7,1.3-0.7,1.7,0L48,32.2l15.1,26.3c0.4,0.7-0.1,1.5-0.9,1.5H32H1.7c-0.8,0-1.3-0.8-0.9-1.5L16,32.2
        L31.1,5.8z"/>
    </svg>
</button>