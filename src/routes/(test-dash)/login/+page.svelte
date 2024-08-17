<script lang="ts">
    import { goto, invalidate } from '$app/navigation';
    import { base } from '$app/paths';

    // import UI elements here

    import { isCloud } from '$lib/system';
    import { page } from '$app/stores';
    import { redirectTo } from '$routes/state';
    import { user } from '$lib/stores/user';
	import Unauthenticated from '$lib/layouts/unauthenticated.svelte';

    let mail: string, pass: string, disabled: boolean;

    export let data;

    async function login() {
        //TODO: this is a test
    }
</script>

<svelte:head>
    <title>Sign in ~ Dashboard</title>
</svelte:head>

<Unauthenticated>
    <svelte:fragment slot="title">Sign in</svelte:fragment>
    <svelte:fragment>
        <p>TODO: Login Form</p>
        <button on:click={login}>Login manually</button>
    </svelte:fragment>
    <svelte:fragment slot="links">
        <li>
            <a href={`${base}/recover`}><span class="text">Forgot Password?</span></a>
        </li>
        <li>
            <a href={`${base}/register${$page?.url?.search ?? ''}`}>
                <span class="text">Sign Up</span>
            </a>
        </li>
    </svelte:fragment>
</Unauthenticated>