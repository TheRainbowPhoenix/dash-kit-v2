<script>
    import { fade } from 'svelte/transition';
    import { app } from '$lib/stores/app';
    import LogoDark from '$lib/images/dash-logo-dark.svg'
    import LogoLight from '$lib/images/dash-logo-light.svg'
</script>

<div class="loading-screen">
    <div class="loader">
        <span>LOADING ...</span>
    </div>
    <!-- TODO -->
    <img
    src={$app.themeInUse == 'dark' ? LogoDark : LogoLight}
    width="24"
    height="24"
    alt="Dashboard Loading ..." />
</div>

<style>
    .loading-screen {
        z-index: 9001;
        position: fixed;
        inset: 0;
        height: 100%;
        width: 100%;
        background-color: hsl(var(--bg-color));
    }
</style>