<script>
    export let data;
</script>

<svelte:head>
    <title>{data.category.toUpperCase()} - Dashboard</title>
</svelte:head>

<slot />
