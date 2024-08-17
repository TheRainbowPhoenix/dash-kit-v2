<script lang="ts">
    import { browser } from '$app/environment';
    import { afterNavigate, goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    // import { Notifications, Progress } from '$lib/layout';

    import { app } from '$lib/stores/app';
    import { ENV, isCloud } from '$lib/system';

    import { onMount } from 'svelte';
    import Loading from './loading.svelte';
    import { loading, requestedMigration } from '$routes/state';
    import { parseIfString } from '$lib/helpers/object';
	import type { Models } from '$lib/types';

    onMount(async () => {
        if (isCloud) {
            // Handle UTM, referrer and tracking here
        }

        if (ENV.PROD) {
            // RUM here
        }

        // Routing logic
        function shouldRedirect(route: string, routes: string[]) {
            return !routes.some((n) => route.startsWith(n));
        }

        const authenticationRoutes = ['/auth'];
        const acceptedUnauthenticatedRoutes = [
            '/login',
            '/register',
            '/recover',
            '/mfa'
        ];
        const acceptedAuthenticatedRoutes = [
            '/console',
            '/invite'
        ]

        const pathname = $page.url.pathname;
        const user = $page.data.account as Models.User<Record<string, string>>;

        // if (shouldRedirect(pathname, authenticationRoutes)) {
        //     if (user?._id) {
        //         if (shouldRedirect(pathname, acceptedAuthenticatedRoutes)) {
        //             await goto(`${base}/console`, {
        //                 replaceState: true
        //             });
        //         }
        //     } else {
        //         if (acceptedUnauthenticatedRoutes.some((n) => pathname.startsWith(n))) {
        //             // Don't redirect.
        //             // await goto(`${base}${pathname}${$page.url.search}`);
        //         } else {
        //             await goto(`${base}/login`, {
        //                 replaceState: true
        //             });
        //         }
        //     }
        // }
        loading.set(false);
    })

    afterNavigate((navigation) => {
        if (navigation.type !== 'enter' && navigation.from?.route?.id !== navigation.to?.route?.id) {
            // TODO: track page view : navigation.to.route.id
        }
    });
</script>

<!-- Notifications -->


<slot />

{#if $loading}
    <Loading />
{/if}


<!-- <Progress /> -->