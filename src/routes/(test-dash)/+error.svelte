<script>
    import { page } from '$app/stores';
	import { Unauthenticated } from "$lib/layouts";

</script>

<Unauthenticated>
    <h3>{$page?.error?.status || 'Invalid Argument'}</h3>
    <h3>{$page?.error?.message || ''}</h3>
    <a href="/">Back</a>
</Unauthenticated>