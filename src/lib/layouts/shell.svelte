<script lang="ts">
    import { browser } from '$app/environment';
    import { beforeNavigate } from '$app/navigation';
    import { page } from '$app/stores';

    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    export let isOpen = false;
    export let showSideNavigation = false;

    let y: number;

    // page.subscribe(({ url }) => {
    //     isOpen = url.searchParams.get('openNavbar') === 'true';
    // });

    const toggleMenu = () => {
        y = 0;
        isOpen = !isOpen;
        if (browser) {
            if (isOpen) {
                document.body.classList.add('l-side-open');
            } else {
                document.body.classList.remove('l-side-closed');
            }
        }
    };

    /**
     * Cancel navigation when wizard is open and triggered by popstate
     */
    // beforeNavigate((n) => {
    //     if (n.willUnload) return;
    //     if (!($wizard.show || $wizard.cover)) return;
    //     if (n.type === 'popstate') {
    //         n.cancel();
    //     }
    //     if (n.type !== 'leave') {
    //         wizard.hide();
    //     }
    // });

    const isNarrow = setContext('isNarrow', writable(false));
    const hasSubNavigation = setContext('hasSubNavigation', writable(false));
    $: sideSize = $hasSubNavigation ? ($isNarrow ? '17rem' : '25rem') : '12.5rem';
</script>

<svelte:window bind:scrollY={y} />

<main class:is-open={isOpen}> 
    <header class="main-header">
        <button
            aria-label="Open Menu"
            on:click={toggleMenu}>
            Menu
        </button>
        <slot name="header" />
    </header>
    {#if isOpen || showSideNavigation}
        <nav class="main-side">
            <slot name="side" />
        </nav>
    {/if}
    <section class="main-content">
        {#if $page.data?.header}
            <svelte:component this={$page.data.header} />
        {/if}

        <slot />
        <slot name="footer" />
    </section>
</main>

<style>
    main {
        min-height: 100vh;
    }

    .main-side {
        z-index: 25;
    }

    @media (max-width: 550.99px), (min-width: 551px) and (max-width: 1198.99px) {
        .main-side {
            top: 4.5rem;
        }
    }
</style>