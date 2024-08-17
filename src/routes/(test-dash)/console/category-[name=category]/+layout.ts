import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const ssr = false;

export const load: LayoutLoad = async ({ parent, params, }) => {
    await parent();

    return {
        category: params.name
    }

};