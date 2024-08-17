import { api } from '$lib/stores/api';
import { Dependencies } from '$lib/constants';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

// const allowed_names = [
//     "a", "b", "c", "e"
// ]

// const disallowed_names = [
//     "d"
// ]

export const load: PageLoad = async ({ params, url, route, depends, parent }) => {
    await parent();
    
    depends(Dependencies.CATEGORIES);

    return {
        category: params.name
    }
    
    // if (allowed_names.includes(params.name)) {
    //     return {
    //         category: params.name
    //     }
    // } else {
    //     if (disallowed_names.includes(params.name)) {
    //         error(403, "Not allowed")
    //     } else {
    //         error(404, "Not found")
    //     }
    // }

};