import { redirect, error } from '@sveltejs/kit';
import { Dependencies } from '$lib/constants';
import { api } from '$lib/stores/api';
import type { LayoutLoad } from './$types';
import { base } from '$app/paths';

export const ssr = false;

const projects = [{
    name: "prj1"
}, {
    name: "prj2"
}, {
    name: "prj3"
}, {
    name: "prj4"
}, {
    name: "prj5"
}]

export const load: LayoutLoad = async ({ parent, fetch, params, depends, url }) => {
    await parent();

    console.log("supa-layout:root");

    depends(Dependencies.ACCOUNT);

    try {
        // TODO: fetch api /v1/account
        const account = await api.shell.account.get(fetch=fetch);

        console.log(account);

        if (account && account._id) {
            // if logged-in ?
            return {
                account
            };
        }

    } catch (error) {}

    const acceptedRoutes = [
        '/login',
        '/register',
        '/recover',
        '/invite',
        '/auth/magic-url',
        '/auth/oauth2/success',
        '/auth/oauth2/failure',
        '/mfa'
    ];

    const redirectUrl = url.pathname && url.pathname !== '/' ? `redirect=${url.pathname}` : '';
    const path = url.search ? `${url.search}&${redirectUrl}` : `?${redirectUrl}`;

    if (!acceptedRoutes.some((n) => url.pathname.startsWith(n))) {
        redirect(303, `${base}/login${path}`);
    }

    return {};
}