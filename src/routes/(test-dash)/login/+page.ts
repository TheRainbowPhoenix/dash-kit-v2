import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

export const load = async ({ url }) => {
    if (url.searchParams.has('campaign')) {
        // TODO: marketing + ab test
    }
    return;
};
