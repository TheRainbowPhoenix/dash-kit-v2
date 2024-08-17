import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import type { PageLoad } from './$types';
import { user } from '$lib/stores/user';

export const load: PageLoad = async () => {
    console.log(`user: ${user}`)
    
    if (!user) {
        redirect(302, `${base}/login`);
    }
};
