import { base } from '$app/paths';
import { page } from '$app/stores';
import { get } from 'svelte/store';

const allowed_names = [
    "a", "b", "c", "e"
]

export function match(param: string) {
    // const $page = get(page);
    // console.log($page);
    // debugger;

    // const pathname = $page.url.pathname;
    // const user = $page.data.account;

	return allowed_names.includes(param)
}