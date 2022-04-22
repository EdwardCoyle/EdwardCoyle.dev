
import { elasticOut } from 'svelte/easing';

/**
 * Simple spin animation
 * @param {*} node 
 * @param {*} param1 
 * @returns 
 */
export function spin(node, { duration }) {
    return {
        duration,
        css: (t) => {
            const eased = elasticOut(t);
            return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
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