import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';
import { Dependencies } from '$lib/constants';
import { api } from '$lib/stores/api';
import type { LayoutLoad } from './$types';
import { redirectTo } from '$routes/state';

export const ssr = false;

export const load: LayoutLoad = async ({ fetch, depends, url }) => {
    console.log("root-layout")
    depends(Dependencies.ACCOUNT);

    try {
        // TODO: fetch api /v1/account
        const account = await api.shell.account.get(fetch=fetch);

        return {
            account
        };
    } catch (error) {
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
}