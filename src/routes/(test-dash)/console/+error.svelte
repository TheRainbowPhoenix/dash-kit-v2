<script>
    import { page } from '$app/stores';
	import { Container } from "$lib/layouts";

</script>

<Container>
    <h3>{$page?.error?.status || 'Invalid Argument'}</h3>
    <h3>{$page?.error?.message || ''}</h3>
    <a href="/">Back</a>
</Container>