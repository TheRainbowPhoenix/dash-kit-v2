<script lang="ts">
	import Panel from '$lib/components/panel.svelte';

	export let profile;
</script>

<Panel>
	<svelte:fragment slot="title">
		<h5 class="mb-0">Account Information</h5>
	</svelte:fragment>

	<svelte:fragment>
        <div class="px-6 py-4">
            <div class="grid gap-4">
                <div class="grid grid-cols-12 gap-6">
                    <label
                        class="text-sm text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 col-span-4 text-foreground-light"
                        >Username</label
                    >

                    <input
                        readonly
                        disabled
                        placeholder="Username"
                        class="flex w-full rounded-md border border-control bg-foreground/[.026] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive aria-[] text-sm leading-4 px-3 py-2 h-[34px] col-span-8"
                        value={profile?.username ?? ''}
                    />
                </div>
                <div class="grid grid-cols-12 gap-6">
                    <label
                        class="text-sm text leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 col-span-4 text-foreground-light"
                        >Email</label
                    >

                    <div class="col-span-8">
                        <input
                            readonly
                            disabled
                            placeholder="Email"
                            class="flex rounded-md border border-control bg-foreground/[.026] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background-control focus-visible:ring-offset-2 focus-visible:ring-offset-foreground-muted disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:bg-destructive-200 aria-[invalid=true]:border-destructive-400 aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus-visible:border-destructive aria-[] text-sm leading-4 px-3 py-2 h-[34px] w-full"
                            value={profile?.primary_email ?? ''}
                        />

                        <div class="col-span-8 mt-4"></div>
                    </div>
                </div>
            </div>
        </div>
	</svelte:fragment>
</Panel>
