<script lang="ts">
    import { goto, invalidate } from '$app/navigation';
    import { base } from '$app/paths';

    // TODO: UI 

    import { Unauthenticated } from '$lib/layouts';

    import { isCloud } from '$lib/system';
    import { page } from '$app/stores';
    import { redirectTo } from '$routes/state';

    export let data;

    async function register() {
        // TODO
    }
</script>

<svelte:head>
    <title>Sign up ~ Dashboard</title>
</svelte:head>

<Unauthenticated>
    <svelte:fragment slot="title">Sign up</svelte:fragment>
    <svelte:fragment>
        TODO: Register form
        <button on:click={register}>Register manually</button>
    </svelte:fragment>
    <svelte:fragment slot="links">
        <li>
            <span>
                Already got an account? <a
                    href={`${base}/login${$page?.url?.search ?? ''}`}>Sign in</a>
            </span>
        </li>
    </svelte:fragment>

</Unauthenticated>