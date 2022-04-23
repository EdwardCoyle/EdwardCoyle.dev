<script>
    // import { spring } from 'svelte/motion';

    export let href = '#';
    export let id = '';
    export let visible = true;
    export let size = 64;
    export let text = '';
    export let hoverColor = 'var(--accent-color)';

    $: bgColor = active ? hoverColor : 'var(--text-color)';
    $: sizePx = `${size}px`;
    $: hiddenClass = visible ? '' : ' hidden';

    let active = false;
    let anchor;

    const toggleActive = (e) => {
        console.log(`Activation Event Fired: "${e.type}"`);
        switch (e.type) {
            case 'mouseenter':
            case 'focusin':
                active = true;
                anchor.classList.add('active');
                break;
            default:
                active = false;
                anchor.classList.remove('active');
                break;
        }
    }
</script>

<style>
    a {
        background: transparent;
        border: none;
        color: inherit;
        cursor: pointer;
        display: inline-block;
        padding: 0;
        position: absolute;
        transition: 
            width 200ms ease-in-out,
            height 200ms ease-in-out;
        transform-origin: center;
    }

    .wrapper {
        display: flex;
        position: relative;
        text-align: center;
    }

    svg {
        color: inherit;
        width: var(--size);
        height: var(--size);

        image-rendering: -webkit-optimize-contrast;

        transform: rotate(0) scale(1);

        transition: 
            fill 200ms cubic-bezier(0.65,0.05,0.36,1),
            height 200ms cubic-bezier(0.65,0.05,0.36,1),
            transform 200ms cubic-bezier(0.65,0.05,0.36,1),
            width 200ms cubic-bezier(0.65,0.05,0.36,1);
    }

    /* Hover State */
    a.active svg {
        height: calc(var(--size) * 2);
        width: calc(var(--size) * 2);
        transform: rotate(360deg) scale(1.40001);
    }

    .label {
        align-self: center;
        justify-self: center;
        pointer-events: none;
        position: absolute;
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

<a
    bind:this={anchor}
    id={id} 
    class="{hiddenClass}"
    href={href}
    on:mouseenter={toggleActive}
    on:mouseleave={toggleActive}
    on:focusin={toggleActive}
    on:focusout={toggleActive}>
    <div class="wrapper">
        <svg
            role="presentation"
            style="--size: {sizePx}; --fill: {bgColor}"
            viewBox="0 0 {size} {size}">
            <style type="text/css">
                path {
                    fill: var(--fill);
                    transition: fill 200ms cubic-bezier(0.65,0.05,0.36,1);
                }
            </style>
            <path d="M31.1,5.8c0.4-0.7,1.3-0.7,1.7,0L48,32.2l15.1,26.3c0.4,0.7-0.1,1.5-0.9,1.5H32H1.7c-0.8,0-1.3-0.8-0.9-1.5L16,32.2
            L31.1,5.8z"/>
        </svg>
        <span class="label">{text}</span>
    </div>
</a>