
import { elasticIn, elasticOut } from 'svelte/easing';

/**
 * Simple spin animation
 * @param {*} node 
 * @param {*} param1 
 * @returns 
 */
export function spinFromPoint(node, { delay = 0, duration = 0, reversed = false }) {
    return {
        delay,
        duration,
        css: (t) => {
            const eased = reversed ? elasticIn(t) : elasticOut(t);
            const currentOpacity = Number(getComputedStyle(node).opacity);
            const newOpacity = ((currentOpacity * t / 100) + 1) * 100;

            return `
					transform: scale(${eased}) rotateZ(${eased * 1080}deg);
                    opacity: ${newOpacity};
				`
        }
    };
}

/**
 * ShiftColor animation
 * @param {*} node 
 * @param {*} param1 
 * @returns 
 */
export function shiftColor(node, { duration }) {
    return {
        duration,
        css: (t) => {
            return `
					color: hsl(
							${Math.trunc(t * 360)},
							${Math.min(100, 1000 - 1000 * t)}%,
							${Math.min(50, 500 - 500 * t)}%,
					);`;
        }
    };
}