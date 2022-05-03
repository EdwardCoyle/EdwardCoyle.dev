import { writable } from 'svelte/store';

// Used when a page is considered "ready"
export let pageReady = writable(false, () => { });