<script lang="ts">
    // TODO: import UI components

    import { app } from '$lib/stores/app';
    import { user } from '$lib/stores/user';
</script>

<main>
    <section>
        <p>Bla bla login here</p>
    </section>
    <section>
        <h1>
            <slot name="title" />
        </h1>
        <div>
            <slot />
        </div>
        <ul>
            <slot name="links" />
        </ul>
    </section>
</main>

<style>

</style>