import { page } from '$app/stores';
import { derived } from 'svelte/store';
import type { Models } from "$lib/types"

export const user = derived(
    page,
    ($page) => $page.data.account as Models.User<Record<string, string>>
);
