<script lang="ts">
    import { page } from '$app/stores';
	
    import Shell from '$lib/layouts/shell.svelte';

    import { app } from '$lib/stores/app';

    import { loading, requestedMigration } from '$routes/state';

    import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

    let isOpen = false;

    onMount(async () => {
        loading.set(false);
        if (!localStorage.getItem('feedbackElapsed')) {
            localStorage.setItem('feedbackElapsed', '0');
        }
    });
</script>

<!-- Commands -->

<Shell 
    bind:isOpen
    showSideNavigation={$page.url.pathname !== '/console' &&
        !$page.url.pathname.includes('/console/onboarding')}>
    <header slot="header">Header</header>
    <nav slot="side">SideNav</nav> <!-- bind:isOpen -->
    <slot />
    <footer slot="footer">Footer</footer>
</Shell>