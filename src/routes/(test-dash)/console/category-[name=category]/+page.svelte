<script>
	import Container from "$lib/layouts/container.svelte";
    import { base } from '$app/paths';

    let pages = [
        "category-a",
        "category-b",
        "category-c",
        "category-d",
        "category-e",
    ]

    export let data;
</script>
<Container>
    <h1>Category {data.category.toUpperCase()}</h1>
    <ul>
        {#each pages as cat_page}
        <li>
            <a href={`${base}/console/${cat_page}`}>Go to {cat_page}</a>
        </li>
        {/each}
    </ul>
</Container>