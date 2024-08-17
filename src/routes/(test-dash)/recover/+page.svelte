<script lang="ts">
    import { goto, invalidate } from '$app/navigation';
    import { base } from '$app/paths';

    // TODO: UI 

    import { Unauthenticated } from '$lib/layouts';

    import { isCloud } from '$lib/system';
    import { page } from '$app/stores';
    import { redirectTo } from '$routes/state';

    let email: string;
    let userId: string;
    let secret: string;

    let password: string;
    let confirmPassword: string;

    async function recover() {
        // TODO
    }

    async function setPassword() {
        // TODO
    }
</script>

<svelte:head>
    <title>Recover ~ Dashboard</title>
</svelte:head>

<Unauthenticated>
    <svelte:fragment slot="title">Password Recovery</svelte:fragment>
    <svelte:fragment>
        TODO: Recover form
        <button on:click={recover}>Recover manually</button>
        <br />
        TODO: Reset password - if user id and token valid
        <button on:click={setPassword}>Reset password</button>
    </svelte:fragment>
    <svelte:fragment slot="links">
        <li>
            <a href={`${base}/login`}><span>Sign in</span></a>
        </li>
        <li>
            <a href={`${base}/register`}><span>Sign Up</span></a>
        </li>
    </svelte:fragment>
</Unauthenticated>